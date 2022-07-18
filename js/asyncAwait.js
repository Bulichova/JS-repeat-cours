console.log('asyncAwait')

const coctailsPath = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
async function getData() {
  const response = await fetch(coctailsPath)
  console.log('response', response)
}
getData()
