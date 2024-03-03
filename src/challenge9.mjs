import {
  characterSetPaths,
  getCharacterSet,
} from "./utils/getCharacterSet.mjs";
import Cypher from "./utils/Cypher.mjs";

//Get character Sets
const letterNumberCharacterSet = await getCharacterSet(
  characterSetPaths.letterNumber,
  {
    padding: { length: 2, character: "0" },
  }
);
const letterLetterCharacterSet = await getCharacterSet(
  characterSetPaths.letterLetter,
  {
    padding: { length: 2, character: "0" },
  }
);

//Initialise Cyphers
const letterNumberCypher = new Cypher(letterNumberCharacterSet);
const letterLetterCipher = new Cypher(letterLetterCharacterSet);

//Run Tests
let plaintext = "Look over there!";
let key = 31045;

const tests = [
  {
    cypher: letterNumberCypher,
    plaintext,
    key,
  },
  {
    cypher: letterLetterCipher,
    plaintext,
  },
  {
    cypher: letterLetterCipher,
    plaintext: `Quick! We need a distraction! Once you read this message, find the community channel named "random" on Discord, and share a random fact regarding any insect - but it has to be about insects! Fingers crossed this will distract and slow down the people cracking these ciphers`,
  },
];

tests.forEach((test, i) => {
  const didPass =
    test.plaintext ===
    test.cypher.decrypt(test.cypher.encrypt(test.plaintext, key), key);
  console.log(`${i}: ${didPass ? "Pass" : "Fail"}`);
});
