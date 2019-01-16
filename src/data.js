// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterFeedlabel = (data, condition) => {
  //filter es un ciclo iterativo como el for, forech, reviw
  const filteredFeedlabel= data.filter(element => {
      return element.feedlabel === condition
  })
  return filteredFeedlabel;
}
