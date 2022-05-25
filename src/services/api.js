export async function getCategories() {
  // Implemente

  const url = 'https://api.mercadolibre.com/sites/MLB/categories';

  const response = await fetch(url);
  const categoriesData = await response.json();
  return categoriesData;
}

async function getProductsDetailsByID(productID) {
  const url = `https://api.mercadolibre.com/items/${productID}`;
  const response = await fetch(url);
  const productData = await response.json();
  return productData;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let result;
  if (categoryId !== '' && query === '') { // PROCURA SOMENTE POR CATEGORIA
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

    const response = await fetch(url);
    const categoriesData = await response.json();
    result = categoriesData;
  } else if (categoryId === '' && query !== '') { // PROCURA SOMENTE ITEM SEM CATEGORIA
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

    const response = await fetch(url);
    const categoriesData = await response.json();
    result = categoriesData;
  } else if (categoryId !== '' && query !== '') { // PROCURA SOMENTE ITEM POR CATEGORIA
    const url = ` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

    const response = await fetch(url);
    const categoriesData = await response.json();
    result = categoriesData;
  }
  return result;
}

export default getProductsDetailsByID;
