require("dotenv").config({
  path: [".env.local", ".env", ".env.development.local"],
});
const axios = require("axios");

const fs = require("fs/promises");

const fileName = "db.json";

let storedDB = {};

try {
  storedDB = require("../" + fileName) ?? {};
} catch (e) {
  console.log("db file not found, will create it");
}

console.log({ storedDB });

console.log("making api request...");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function writeFile(filePath, data) {
  try {
    await fs.writeFile(filePath, data);
    console.log("File written successfully");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

const castToTip = "https://warpcast.com/alexk/0x68cb568b";

const options = {
  method: "GET",
  url: `https://api.neynar.com/v2/farcaster/cast/conversation?identifier=${encodeURIComponent(castToTip)}&type=url&reply_depth=1&include_chronological_parent_casts=true`,
  headers: { accept: "application/json", api_key: "NEYNAR_API_DOCS" },
};

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

axios
  .request(options)
  .then(async function (response) {
    // console.log(response.data);
    console.log(response.data.conversation.cast.direct_replies);
    console.log(
      response.data.conversation.cast.direct_replies[0].direct_replies,
    );

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

    const directReplies = response.data.conversation.cast.direct_replies.filter(
      (r) => {
        // console.log("r.author.fid", r.author.fid, storedDB[r.author.fid]);
        return r.author.fid !== 14879 && !storedDB[r.author.fid];
      },
    );

    // console.log(directReplies);

    for (let i = 0; i < directReplies.length; i++) {
      const r = directReplies[i];
      console.log("tipping user", r.author.fid);
      await cast({ text: "Tipped 18 $DEGEN by /ak 🫡", parent: r.hash });

      console.log("saving to db", r.author.fid);
      storedDB[r.author.fid] = true;
      await writeFile(fileName, JSON.stringify(storedDB));

      console.log("wait 1 sec");
      await sleep(1000);
    }
  })
  .catch(function (error) {
    console.error(error);
  });
