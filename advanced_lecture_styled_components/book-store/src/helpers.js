export const formatAuthors = (authors) => {
  if(!authors) return ["no author"];

  const formatted = authors.reduce((prev, curr, i, arr) => {
    const separator = i < arr.length - 1 ? ", " : " and "
    return prev + separator + curr;
  })

  return formatted;
}