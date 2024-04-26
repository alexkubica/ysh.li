require("dotenv").config({
  path: [".env.local", ".env", ".env.development.local"],
});
const _ = require("lodash");
const axios = require("axios");
const fs = require("fs/promises");

const fileName = "db.json";

let storedDB = {};

try {
  storedDB = require("../" + fileName) ?? {};
} catch (e) {
  console.log("db file not found, will create it");
}

// console.log({ storedDB });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function writeFile(filePath, data) {
  try {
    console.log("writing to file");
    await fs.writeFile(filePath, data);
    console.log("File written successfully");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

const amountToTip = process.argv[2] ?? 10;

const castsToTip = {
  ham: ["https://warpcast.com/alexk/0x360acbd5"],
  degen: [
    "https://warpcast.com/alexk/0x570beb1c",
    "https://warpcast.com/alexk/0xcbe25ee1",
    "https://warpcast.com/alexk/0x810b7559",
  ],
};

console.log({ castsToTip, amountToTip });

async function cast(data) {
  const options = {
    method: "POST",
    url: "https://api.neynar.com/v2/farcaster/cast",
    data: {
      signer_uuid: process.env.NEYNAR_SIGNER_UUID,
      text: data.text,
      parent: data.parent,
    },
    headers: {
      accept: "application/json",
      api_key: process.env.NEYNAR_API_KEY,
      "content-type": "application/json",
    },
  };

  // console.log("reply casting");

  try {
    const response = await axios.request(options);
    console.log("cast success", response.data);
    return response.data;
  } catch (error) {
    console.error("cast error", error);
  }
}

(async function () {
  for (let i = 0; i < castsToTip.degen.length; i++) {
    const castToTip = castsToTip.degen[i];

    const options = {
      method: "GET",
      url: `https://api.neynar.com/v2/farcaster/cast/conversation?identifier=${encodeURIComponent(castToTip)}&type=url&reply_depth=1&include_chronological_parent_casts=true`,
      headers: { accept: "application/json", api_key: "NEYNAR_API_DOCS" },
    };

    await axios
      .request(options)
      .then(async function (response) {
        let directReplies =
          response.data.conversation.cast.direct_replies.filter((r) => {
            const cacheId = castToTip + " " + r.author.fid;
            // const cacheId = castToTip + " " + r.author.fid;
            const shouldTip =
              r.author.fid !== 14879 &&
              !storedDB[cacheId] &&
              r.replies.count === 0;

            const replyUrl = `https://warpcast.com/${r.author.username}/${r.hash.slice(0, 10)}`;
            console.log("check tip?", {
              replyUrl,
              fid: r.author.fid,
              shouldTip,
            });

            return shouldTip;
          });

        directReplies = _.uniqBy(directReplies, "author.fid");
        console.log(directReplies.length);

        for (let i = 0; i < directReplies.length; i++) {
          const r = directReplies[i];
          const cacheId = castToTip + " " + r.author.fid;
          const replyUrl = `https://warpcast.com/${r.author.username}/${r.hash.slice(0, 10)}`;
          console.log("tipping user", { fid: r.author.fid, replyUrl });
          await cast({
            text: `Have a degenful day 🎩
${amountToTip} $DEGEN sponsored by /ak ⚡️`,
            parent: r.hash,
          });

          storedDB[cacheId] = true;
          await writeFile(fileName, JSON.stringify(storedDB));

          console.log("wait 0.5 sec");
          await sleep(500);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  for (let i = 0; i < castsToTip.ham.length; i++) {
    const castToTip = castsToTip.ham[i];

    const options = {
      method: "GET",
      url: `https://api.neynar.com/v2/farcaster/cast/conversation?identifier=${encodeURIComponent(castToTip)}&type=url&reply_depth=1&include_chronological_parent_casts=true`,
      headers: { accept: "application/json", api_key: "NEYNAR_API_DOCS" },
    };

    await axios
      .request(options)
      .then(async function (response) {
        let directReplies =
          response.data.conversation.cast.direct_replies.filter((r) => {
            const cacheId = castToTip + " " + r.author.fid;
            const shouldTip =
              r.author.fid !== 14879 &&
              !storedDB[cacheId] &&
              r.replies.count === 0;

            const replyUrl = `https://warpcast.com/${r.author.username}/${r.hash.slice(0, 10)}`;
            console.log("check tip?", {
              replyUrl,
              fid: r.author.fid,
              shouldTip,
            });

            return shouldTip;
          });

        directReplies = _.uniqBy(directReplies, "author.fid");
        console.log(directReplies.length);

        for (let i = 0; i < directReplies.length; i++) {
          const r = directReplies[i];
          const cacheId = castToTip + " " + r.author.fid;
          const replyUrl = `https://warpcast.com/${r.author.username}/${r.hash.slice(0, 10)}`;
          console.log("tipping user", { fid: r.author.fid, replyUrl });
          await cast({
            text: `Have a hamderful day!
🍖 x ${amountToTip} sponsored by /ak ⚡️`,
            parent: r.hash,
          });

          storedDB[cacheId] = true;
          await writeFile(fileName, JSON.stringify(storedDB));

          console.log("wait 0.5 sec");
          await sleep(500);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
})();

/*
    [
  {
    object: 'cast',
    hash: '0x7b27290c04788ea3a65ae3a7ebd89b37dae56067',
    thread_hash: '0xec892ab8c8c7433a38137233d5a9fadc3c0dc0bc',
    parent_hash: '0xec892ab8c8c7433a38137233d5a9fadc3c0dc0bc',
    parent_url: null,
    root_parent_url: 'https://warpcast.com/~/channel/makeitrain',
    parent_author: { fid: 14879 },
    author: {
      object: 'user',
      fid: 14879,
      custody_address: '0xb856d495ea9608872426084ada861ead7404d9f1',
      username: 'alexk',
      display_name: 'Alex Kubica 🇮🇱🎩🩸',
      pfp_url: 'https://i.imgur.com/KXIxgoz.jpg',
      profile: [Object],
      follower_count: 922,
      following_count: 911,
      verifications: [Array],
      verified_addresses: [Object],
      active_status: 'active',
      power_badge: true
    },
    text: 'test 1',
    timestamp: '2024-04-13T08:14:19.000Z',
    embeds: [],
    reactions: { likes: [], recasts: [] },
    replies: { count: 1 },
    mentioned_profiles: [],
    direct_replies: [ [Object] ]
  }
]
[
  {
    object: 'cast',
    hash: '0x5bfc20e7b1dd8dfaa0e860e9a005635df063d6c9',
    thread_hash: '0xec892ab8c8c7433a38137233d5a9fadc3c0dc0bc',
    parent_hash: '0x7b27290c04788ea3a65ae3a7ebd89b37dae56067',
    parent_url: null,
    root_parent_url: 'https://warpcast.com/~/channel/makeitrain',
    parent_author: { fid: 14879 },
    author: {
      object: 'user',
      fid: 14879,
      custody_address: '0xb856d495ea9608872426084ada861ead7404d9f1',
      username: 'alexk',
      display_name: 'Alex Kubica 🇮🇱🎩🩸',
      pfp_url: 'https://i.imgur.com/KXIxgoz.jpg',
      profile: [Object],
      follower_count: 922,
      following_count: 911,
      verifications: [Array],
      verified_addresses: [Object],
      active_status: 'active',
      power_badge: true
    },
    text: 'test 2',
    timestamp: '2024-04-13T08:14:24.000Z',
    embeds: [],
    reactions: { likes: [], recasts: [] },
    replies: { count: 0 },
    mentioned_profiles: [],
    direct_replies: []
  }
]
*/
