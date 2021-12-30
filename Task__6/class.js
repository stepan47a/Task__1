let _name = document.querySelectorAll('.name');
let _price = document.querySelectorAll('.price_ingredients');
let _calories = document.querySelectorAll('.calories_ingredients');
let _nameIngredients = document.querySelectorAll('.name_ingredients');
let _priceIngredients = document.querySelectorAll('.price_ingredient');
let _caloriesIngredients = document.querySelectorAll('.calories_ingredient');
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
        let count = 0;
        let price = 0;
        let callories = 0;
        
        for(let i = 0; i<doughclick.length; i++)
        {
            doughclick[i].onclick = function(){ 
                if(doughclick[i].classList.toggle('border')){
                    if(count == 1){
                        document.querySelector('.selected_ingredients').remove();
                        for(let k = 0; k<doughclick.length; k++)
                        {
                            if(k != i)
                                doughclick[k].classList.remove('border');
                        }    
                        count = 0;
                    }
                    if(count == 0){
                        let parent = document.querySelector('.order_pizza');
                        let elem = document.createElement("div");
                        elem.className = "selected_ingredients";
                        elem.innerHTML = _name[i].textContent;
                        parent.append(elem);
                        //document.querySelector('.callories_pizza').innerHTML = "Каллорийность пиццы: " + dough_calories[i].textContent + " каллорий";
                        count = 1;
                        callories = Number(_calories[i].textContent);
                        price = Number(_price[i].textContent);
                    }
                }
                else{
                    document.querySelector('.selected_ingredients').remove();
                    callories = 0;
                    price = 0;
                    count = 0;
                }
            }
        }
        
    }
    get retaddblock(){
        return this.addblock();
    }
}
class OtherIngredients extends Dough{
    AddBlockForIngredients(){
        let ingredientsClick = document.querySelectorAll('.ingredients');
        for(let i = 0; i<ingredientsClick.length; i++)
        {
            ingredientsClick[i].onclick = function(){ 
                if(ingredientsClick[i].classList.toggle('border')){
                    let parent = document.querySelector('.order_pizza');
                    let elem = document.createElement("div");
                    elem.className = "selected_ingredients";
                    elem.innerHTML = _nameIngredients[i].textContent;
                    parent.append(elem);
                }
                else{
                    document.querySelector('.selected_ingredients').remove();
                }
            }   
        }
    }
    TotalPrice(){
        let ingredientsClick = document.querySelectorAll(".ingredients");
        let price = 0;
        let callories = 0;
        for(let i = 0; i<ingredientsClick.length; i++){
            ingredientsClick[i].onclick = function(){
                if(ingredientsClick[i].classList.toggle('border'))
                {
                    price = Number(_priceIngredients[i].textContent) + price;
                    callories = Number(_caloriesIngredients[i].textContent) + callories;
                }
                else{
                    price = Number(_priceIngredients[i].textContent) - price;
                    callories = Number(_caloriesIngredients[i].textContent) + callories;
                }
            }
            return [price,callories];
        }

    }
    get RetAddBlockForIngredients(){
        return this.AddBlockForIngredients();
    }
    get ReturnTotalPrice(){
        return this.TotalPrice();
    }
}
// class Price extends Ingredients{

// }
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

let ingredients = new OtherIngredients(_nameIngredients,_caloriesIngredients,_priceIngredients);
ingredients.retaddblock;
ingredients.RetAddBlockForIngredients;
console.log(ingredients.ReturnTotalPrice[0]);
//dough.retaddblock;
// ingredients.retaddblock;
// console.log(ingredients.returnPriceAndCallories);