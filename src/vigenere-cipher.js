const { NotImplementedError } = require('../extensions/index.js');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function* keyLetterGen(key) {
  let idx = 0;
  let keyLength = key.length;
  while (true) {
    yield key[idx++ % keyLength];
  }
}

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  #isDirect;
  constructor(isDirect = true) {
    this.#isDirect = isDirect;
  }

  encrypt(plain, key) {
    if (!plain || !key) throw new Error('Incorrect arguments!');
    let result = [];
    let gen = keyLetterGen(key);
    for (let letter of [...plain]) {
      if (!alphabet.includes(letter.toUpperCase())) {
        result.push(letter);
        continue;
      }
      let shift = alphabet.indexOf(gen.next().value.toUpperCase());
      let letterIdx = alphabet.indexOf(letter.toUpperCase());
      result.push(alphabet[(letterIdx + shift) % 26]);
    }
    return this.#isDirect ? result.join('') : result.reverse().join('');
  }
  decrypt(cipher, key) {
    if (!cipher || !key) throw new Error('Incorrect arguments!');
    let result = [];
    let gen = keyLetterGen(key);
    for (let letter of [...cipher]) {
      if (!alphabet.includes(letter.toUpperCase())) {
        result.push(letter);
        continue;
      }
      let shift = alphabet.indexOf(gen.next().value.toUpperCase());
      let letterIdx = alphabet.indexOf(letter.toUpperCase());
      result.push(
        alphabet[
          (letterIdx > shift ? letterIdx - shift : 26 + letterIdx - shift) % 26
        ]
      );
    }
    return this.#isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
