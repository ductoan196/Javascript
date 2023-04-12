function Product(product_name, product_price, product_brand, product_count){
    this.name = product_name,
    this.price = product_price,
    this.brand = product_brand,
    this.count = product_count
  }
  const product1 = new Product("Iphone 13 Pro Max", 3000000, "Apple", 2)
  const product2 = new Product("Samsung Galaxy z Fold3", 41000000, "Samsung", 1)
  const product3 = new Product("Iphone 11", 15500000, "Apple", 1)
  const product4 = new Product("OPPO Find X3 Pro", 19500000, "OPPO", 3)
  let products = [product1, product2, product3, product4]


  function print_product_list(product_arr){
    for (product of product_arr)
      console.log(`     ${product.name} - ${product.price} - ${product.brand} - ${product.count}`)
  }
  console.log("1. List products: ")
print_product_list(products)

//2.
function total_price(product_list){
  return product_list.reduce((total, product) => total + product.price*product.count,0)
}
console.log(`2. Total price: ${total_price(products)}`)


//3. 
function filter_by_brand(product_list, brand){
    return product_list.filter(product => (product.brand.toLowerCase()) ===(brand.toLowerCase()))
  }
  console.log("3. List product of Apple: ")
  print_product_list(filter_by_brand(products, "Apple"))

//4.
function filter_by_price(product_list, price){
	return product_list.filter(product => product.price>price)
}
console.log("4. List product have price is bigger than 20000000")
print_product_list(filter_by_price(products, 20000000))

//5.
function filter_by_name(product_list, subStr){
	return product_list.filter(product => product.name.toLowerCase().includes(subStr.toLowerCase()))
}
console.log("5. List product have name contain 'pro'")
print_product_list(filter_by_name(products, 'pro'))

//6
function add_element(product_list, product_item){
    product_list.push(product_item)
}
console.log("6.List products after adding product 5")
add_element(products, new Product("Lenovo Vibe X", 8000000, "Lenovo", 1))
print_product_list(products)

//7
function remove_by_brand(product_list, brand){
	return product_list.filter(product => product.brand.toLowerCase()!== brand.toLowerCase())
}
console.log("7. List products that brand not samsung")
print_product_list(remove_by_brand(products, "Samsung"))

//8
console.log("8. List products order by price ASC")
products.sort((a,b)=> a.price-b.price)
print_product_list(products)

//9
console.log("9. List products order by count DESC")
products.sort((a,b)=> b.count-a.count)
print_product_list(products)

//10
function get_random_products(product_list, number){
    product_list.sort(() => Math.random() - 0.5)
    return product_list.slice(0,2)
}

console.log("10. get random 2 product in product list")
print_product_list(get_random_products(products, 2))