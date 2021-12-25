let dough_name = document.querySelectorAll('.name').textContent;
let dough_price = Number(document.querySelectorAll('.price_ingredients').textContent);
let dough_calories = Number(document.querySelectorAll('.calories_ingredients').textContent);


class Ingredients{
    constructor(name,callories,price)
    {
        this.name = name;
        this.callories = callories;
        this.price = price;
    }
}
class Dough extends Ingredients{
    addblock(){
        let doughclick = document.querySelectorAll('.dough_pizza');
        for(let i = 0; i<doughclick.length; i++)
        {
            doughclick[i].onclick = function(){
                if(doughclick[i].classList.toggle('border')){
                    let parent = document.querySelector('.order_pizza');
                    let elem = document.createElement("div");
                    elem.className = "selected_ingredients";
                    elem.innerHTML = selected_dough.name;
                    parent.append(elem);
                }
                else{
                    document.querySelector('.selected_ingredients').remove();
                }
            }
        }
    }
}
// class Pizza extends Ingredients{
//     pricePizza()
//     {
//         return this.price + 2;
//     }
//     get retPrice(){
//         return this.pricePizza();
//     }
// }
// let pizza = new Pizza(dough_name, dough_calories, dough_price);
// console.log(pizza.retPrice);
let dough = new Dough(dough_name, dough_calories, dough_price);
dough.addblock;
// let dough = new Ingredients(dough_name, dough_price, dough_calories);
// console.log(dough.calc);
// class Pizza{
//     constructor(dough,ingredients,sauce){
//         this.dough = dough;
//         this.ingredients = ingredients;
//         this.sauce = sauce;
//     }
//     if (dough) {
        
//     }
// }