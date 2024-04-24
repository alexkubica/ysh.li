// import clipboard from "clipboardy";

const combo = process.argv[2] ?? "";
const matchesTo = "🟡🔵🟢🔴⚪🟠🟣";

function calculateMatchPercentage(sequence1, sequence2) {
  console.log("comparing sequences");
  console.log(sequence1);
  console.log(sequence2);
  let matches = 0;
  let totalPositions = sequence1.length;

  for (let i = 0; i < totalPositions; i++) {
    if (sequence1[i] === sequence2[i]) {
      matches++;
    }
  }

  let matchPercentage = (matches / totalPositions) * 100;
  return matchPercentage;
}

const msg = `${combo} matches ${calculateMatchPercentage([...combo], [...matchesTo])}% of the secret combo.`;
console.log(msg);
// clipboard.writeSync(msg);
