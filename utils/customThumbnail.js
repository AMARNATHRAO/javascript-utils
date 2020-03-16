const colors = [
  '#DD5F32',
  '#FF8B8B',
  '#FF8AAF',
  '#D88900',
  '#C86DB6',
  '#94A894',
  '#3B9A9C',
  '#005794',
  '#5AB0E3',
  '#FF8636',
  '#393E46',
  '#6ABE83',
  '#6B78B4',
  '#F1B854',
  '#29335C',
  '#8FCB8F',
  '#BF72D5',
  '#978E43',
  '#C3A150',
  '#2B9464',
  '#E3B469',
  '#DD5F32',
  '#3BD7C8',
];

const customThumbnail = text => {
  if (!text || !text.trim()) {
    return {};
  }
  const words = text.trim().split(' ');
  if (!words.length) {
    return {};
  }
  // get thumbnail text
  const startChar = words[0][0].toUpperCase();
  let thumbnailText = startChar;
  if (words.length > 1) {
    const endChar = words[words.length - 1][0].toUpperCase();
    thumbnailText += endChar;
  }
  // get thumnail color
  let sumOfCharCodes = 0;
  for (let index = 0; index < text.length; ) {
    if (!Number.isNaN(text.charCodeAt(index))) {
      sumOfCharCodes += text.charCodeAt(index);
    }
    index += 1;
  }
  const thumbnailColor = colors[sumOfCharCodes % colors.length];
  return {
    color: thumbnailColor,
    text: thumbnailText,
  };
};

export default customThumbnail;
