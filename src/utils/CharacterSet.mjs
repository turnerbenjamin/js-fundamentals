export default class CharacterSet {
  #charValueArray;
  #charValueMap;
  #valueCharMap;
  #padding;

  constructor(charValueCsvs, options) {
    this.#charValueMap = {};
    this.#valueCharMap = {};
    this.#charValueArray = [];
    if (options?.padding) {
      this.#padding = {};
      this.#padding.length = options?.padding?.length || 2;
      this.#padding.character = options?.padding?.character || "?";
      this.padding = this.#padding.length;
    }
    charValueCsvs.forEach((charValueCsv, i) => {
      const character = charValueCsv[0];
      const value = this.#applyPadding(charValueCsv.slice(3));
      this.#charValueArray.push({ character, value });
      this.#charValueMap[character] = i;
      this.#valueCharMap[value] = i;
    });
    this.count = this.#charValueArray.length;
  }

  #applyPadding(character) {
    if (!this.#padding) return character;
    return character.padStart(this.#padding.length, this.#padding.character);
  }

  getIndexByCharacter(character) {
    return this.#charValueMap[character];
  }
  getIndexByValue(value) {
    return this.#valueCharMap[value];
  }

  getCharacterByValue(value) {
    return this.#charValueArray[this.getIndexByValue(value)]?.character;
  }

  getValueByCharacter(character) {
    return this.#charValueArray[this.getIndexByCharacter(character)]?.value;
  }

  getCharacterByIndex(i) {
    return this.#charValueArray[i]?.character;
  }

  getValueByIndex(i) {
    return this.#charValueArray[i]?.value;
  }
}
