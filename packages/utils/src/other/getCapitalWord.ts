const getCapitalWord = (text: string) => {
  if (!text) {
    return text
  } else {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
  }
}

export default getCapitalWord
