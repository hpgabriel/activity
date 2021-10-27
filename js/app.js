const container = document.querySelector(".container");
const coffees =[
    {
        name:"Evie",
        image: "images/car1.jpg"
    },
    {
        name: "Aceituna",
        image: "images/car2.jpg"

    },
    {
        name: "EPolca",
        image: "images/car3.jpg"
    },
    {
        name: "Cindy",
        image: "images/car4.jpg"
    },
    {
        name: "Pepita",
        image: "images/car5.jpg"
    },
    {
        name: "Ellie",
        image:"images/car6.jpg"
    },
    {
        name: "Valquiria",
        image:"images/car7.jpg"
    },
    {
        name:"Sabana",
        image:"images/car8.jpg"
    },
    {
        name:"Venus",
        image:"images/car9.jpg"
    }
    
];
const showCoffees =() => {
    let output ="";
    coffees.forEach(
        ({name, image}) =>
        (output += 
        `
        <div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="#"> Reload</a>
        </div>`
            )
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        this.navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registrado"))
        .catch(err => console.log("service worker no registrado", err));
    });
}
