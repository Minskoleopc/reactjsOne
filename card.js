console.log("Exporting module .....")

// variable
export let a = 10
// array
export let names = ["chinmay","ram","sarika","sachin"]
// function
export let cart = []
export let addtoCard = function(prod,quantity){
    let obj = {}
    obj[prod]= quantity
    cart.push(obj)
    console.log(`${quantity}${product}`)


}
 



