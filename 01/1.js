// 1.1
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// 1.2
function fixSpacesWithRegExp(str) {
  return str
    .replace(/(?<=\s)\s+| +(?=[,.])/gm, '')
    .replace(/,(?!\s)/gm, ', ')
    .replace(/[.](?!\s|$)/gm, '. ');
}

function fixSpaces(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {

    if ([',', '.'].includes(str[i]) && str[i + 1] !== ' ') {
      result += str[i] + ' ';
    } else {
      if (str[i] === ' ' && [' ', ',', '.'].includes(str[i + 1])) {
        continue;
      }
      result += str[i];
    }

  }

  return result.trim();
}

// 1.3
function wordsTotal(str) {
  return str
    .split(' ')
    .length;
}

// 1.4
function wordsCount(str) {
  const result = new Map();
  const words = str.split(' ');

  for (const word of words) {
    const cleanWord = word.replace(/[,.!?]/, '').toLowerCase();
    result.set(cleanWord, (result.get(cleanWord) ?? 0) + 1);
  }

  return result;
}
