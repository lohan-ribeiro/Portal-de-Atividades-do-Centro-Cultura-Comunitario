export const formatText = (text) => {
  if (!text) return ""

  return text
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}