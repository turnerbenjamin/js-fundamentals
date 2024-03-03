export default class Cypher {
  #characterSet;
  constructor(charMap) {
    this.#characterSet = charMap;
  }

  #encryptChar(character, key) {
    if (!key) return this.#characterSet.getValueByCharacter(character);
    const baseIndex = this.#characterSet.getIndexByCharacter(character);
    if (baseIndex === undefined) return "";
    const encryptedCharIndex = (baseIndex + key) % this.#characterSet.count;
    return this.#characterSet.getValueByIndex(encryptedCharIndex);
  }

  #decryptChar(encryptedChar, key) {
    if (!key) return this.#characterSet.getCharacterByValue(encryptedChar);
    const baseIndex = this.#characterSet.getIndexByValue(encryptedChar);
    if (baseIndex === undefined) return "";
    const decryptedCharIndex =
      (((baseIndex - key) % this.#characterSet.count) +
        this.#characterSet.count) %
      this.#characterSet.count;
    return this.#characterSet.getCharacterByIndex(decryptedCharIndex);
  }

  encrypt(str, key = 0) {
    let encryptedText = "";
    for (let i = 0; i < str.length; i++) {
      const character = str[i];
      let encryptedChar = this.#encryptChar(character, key);
      encryptedText += encryptedChar;
    }
    return encryptedText;
  }

  decrypt(str, key) {
    let plainText = "";
    for (let i = 0; i < str.length; i += this.#characterSet.padding ?? 1) {
      let encryptedChar = str.slice(i, i + (this.#characterSet.padding || 1));
      const decryptedChar = this.#decryptChar(encryptedChar, key);
      plainText += decryptedChar;
    }

    return plainText;
  }
}
