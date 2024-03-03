import {
  characterSetPaths,
  getCharacterSet,
} from "./utils/getCharacterSet.mjs";
import Cypher from "./utils/Cypher.mjs";

//Get character Set
const letterNumberCharacterSet = await getCharacterSet(
  characterSetPaths.letterNumber,
  {
    padding: { length: 2, character: "0" },
  }
);

//Initialise Cypher
const letterNumberCypher = new Cypher(letterNumberCharacterSet);

//Run Tests

const tests = [
  { plainText: "a", key: 1 },
  { plainText: "Ed", key: 4 },
  { plainText: "Hi, Ed!", key: 302 },
];
const expectedResults = ["03", "3609", "46218912431665"];

tests.forEach((test, i) => {
  const expectedResult = expectedResults[i];
  const result = letterNumberCypher.encrypt(test.plainText, test.key);
  console.log(
    `${i + 1}: ${test.plainText} -> ${result} ${
      result === expectedResult ? "Pass" : `Fail (expected: ${expectedResult})`
    }`
  );
});
