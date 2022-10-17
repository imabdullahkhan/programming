var getHint = function (secret, guess) {
  let remainingSecretHash = {};
  let remainingGuessHash = {};
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      // if the secret number is not in the hash, it will be added
      if (remainingSecretHash.hasOwnProperty(secret[i])) {
        remainingSecretHash[secret[i]]++;
      } else {
        remainingSecretHash[secret[i]] = 1;
      }

      // if the guess number is not in the hash, it will be added
      if (remainingGuessHash.hasOwnProperty(guess[i])) {
        remainingGuessHash[guess[i]]++;
      }
      else {
        remainingGuessHash[guess[i]] = 1;
      }

      if (remainingSecretHash[guess[i]] > 0 && remainingGuessHash[guess[i]] > 0) {
        cows++;
        remainingSecretHash[guess[i]]--;
        remainingGuessHash[guess[i]]--;
      }
      if (remainingGuessHash[secret[i]] > 0 && remainingSecretHash[secret[i]] > 0) {
        cows++;
        remainingGuessHash[secret[i]]--;
        remainingSecretHash[secret[i]]--;

      }

    }
  }
  return `${bulls}A${cows}B`;
};
console.log(getHint("2962", "7236"));
// console.log(getHint("1807", "7810"));
// console.log(getHint("1123", "0111"));