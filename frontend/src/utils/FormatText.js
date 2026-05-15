export const formatText = (text) => {
  if (!text) return ""

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")
}