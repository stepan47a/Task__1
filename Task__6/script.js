// const thin = document.querySelector('.thin');

// thin.onclick = function(){
//     var dough_thin_price = document.getElementById('price').textContent;
//     var dough_thin_calories = document.getElementById('calories').textContent;
//     let dough = {
//         price: dough_thin_price,
//         calories: dough_thin_calories,
//     }
//     console.log(dough)
//     this.classList.toggle('border');
// }

// let dough = document.querySelectorAll('.dough_pizza');
// for(let i = 0; i<dough.length; i++)
// {
//     dough[i].onclick = function(){
//         let dough_name = document.querySelectorAll('.name')[i].textContent;
//         let dough_price = document.querySelectorAll('.price_ingredients')[i].textContent;
//         let dough_calories = document.querySelectorAll('.calories_ingredients')[i].textContent;
    
//         let selected_dough = {
//             name: dough_name,
//             price: dough_price,
//             calories: dough_calories,
//         }
//         if(dough[i].classList.toggle('border')){
//             let parent = document.querySelector('.order_pizza');
//             let elem = document.createElement("div");
//             elem.className = "selected_ingredients";
//             elem.innerHTML = selected_dough.name;
//             parent.append(elem);
//         }
//         else{
//             document.querySelector('.selected_ingredients').remove();
//         }
//     }
// }