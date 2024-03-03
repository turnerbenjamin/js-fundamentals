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
  {
    encryptedText:
      "5328961950237219541939272833301938343224343324923819343319393419392728381922283527243772",
    key: 4771,
  },
  {
    encryptedText:
      "68249237241926343333201933242423193934192234322419403519422839271920193324421934332497",
    key: 4771,
  },
  {
    encryptedText:
      "5419392728333019541927204124192940383919392724193927283326971946193124393924378231243939243719384021383928394039283433192228352724377219572439923819233419283972",
    key: 4771,
  },
];
const expectedResults = [
  "Hi, Ed! I think someone's on to this cipher!",
  "We're gonna need to come up with a new one.",
  "I think I have just the thing. A letter-letter substitution cipher! Let's do it!",
];

tests.forEach((test, i) => {
  const expectedResult = expectedResults[i];
  const result = letterNumberCypher.decrypt(test.encryptedText, test.key);
  console.log(
    `${i + 1}: ${result} ${
      result === expectedResult ? "Pass" : `Fail (expected: ${expectedResult})`
    }`
  );
});
