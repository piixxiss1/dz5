let base = [
    {id: 1, img: './img/дз-5.png', title: 'Syltherine',  subtitle: 'Stylish cafe chair'},
    {id: 2, img: './img/дз-5.png', title: 'Syltherine',  subtitle: 'Stylish cafe chair'},
    {id: 3, img: './img/дз-5.png', title: 'Syltherine',  subtitle: 'Stylish cafe chair'},
    {id: 4, img: './img/дз-5.png', title: 'Syltherine',  subtitle: 'Stylish cafe chair'},
    {id: 5, img: './img/дз-5.png', title: 'Syltherine',  subtitle: 'Stylish cafe chair'},
    {id: 6, img: './img/дз-5.png', title: 'Syltherine',  subtitle: 'Stylish cafe chair'},
    {id: 7, img: './img/дз-5.png', title: 'Syltherine',  subtitle: 'Stylish cafe chair'},
    {id: 8, img: './img/дз-5.png', title: 'Syltherine',  subtitle: 'Stylish cafe chair'}

]


let row = document.querySelector('.row')
const addCardsInProb = () => {
base.forEach((item) => {
    row.innerHTML += `<div class="card" id='${item.id}'>
    <img class="card__img" src='./${item.img}' alt="${item.subtitle}">
    <h2 class="card__title">${item.title}</h2>
    <p class='card__subtitle'>${item.subtitle}</p>
    <button class="delbtn">Delete</button>
    </div>`
})

}


addCardsInProb()


const del = document.querySelectorAll(".delbtn")


function removecontent(e) {
    const remove = e.currentTarget;
    remove.parentElement.remove();
}

del.forEach((del) => del.addEventListener ('click', removecontent));
console.log(del);
