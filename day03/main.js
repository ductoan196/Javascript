function Product(product_name, product_price, product_brand, product_count){
    this.name = product_name,
    this.price = product_price,
    this.product_brand = product_brand
    this.product_count = product_count
}
const product_list = [
    new Product("Iphone 13 product", 3000000, "Apple", 2),
    new Product("Samsung galaxy Zfold 3", 41000000,"Samsung",1),
   new Product("Iphone 11", 1500000, "Apple",1),
   new Product("Oppo Find X3 Pro", 1950000, "Oppo", 3),
]

function total_price(){
   return product_list.reduce((total, product) => total + product.price*product.product_count,0)
}
console.log(total_price())
function find_by_brand(){
    return product_list.filter(product => product.product_brand ==="Apple")
}
console.log(find_by_brand())