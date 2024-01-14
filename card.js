console.log("Exporting module .....")

// variable
export let a = 10
// array
export let names = ["chinmay","ram","sarika","sachin"]
// function
export let cart = []
export let addtoCard = function(product,quantity){
    let obj = {}
    obj[product]= quantity
    cart.push(obj)
    console.log(`${quantity}${product}`)
}




