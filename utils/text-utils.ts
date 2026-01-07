export const linkify = (text: string) => {
  if (typeof text !== 'string') return text;
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    let href = url;
    if (!href.startsWith('http')) {
      href = 'https://' + href;
    }
    return `<a href="${href}" target="_blank">${url}</a>`;
  });
};

export const capitalizeFirst = (text: string) => {
  if (typeof text !== 'string' || text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
};
