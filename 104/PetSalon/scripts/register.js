//object literal: name,address{},tel,hours,pet[]

let PetSalon ={
    name: "The fashion pet",
    tel: "111-222-3333",
    hours:{
        open: "9:00 am",
        close: "6:00pm",
    },
    address: {
        city: "Houston",
        street: "6th st",
        zip: "77521"
    },
    pets:[
        {
            name:"Scooby",
            age:70,
            gender:"Male",
            service:"Grooming",
            breed:"Bulldog"
        },
        {
            name:"Scrappy",
            age: 50,
            gender: "Male",
            service: "Nails cut",
            breed: "Yorkshire"
        },
        {
            name:"Speedy",
            age: 30,
            gender: "Male",
            service: "Wash",
            breed: "Mutt"
        }
    ]
}

function displayPetName(){
    const petsDiv = document.querySelector("#pets");
    for (let i =0; i < PetSalon.pets.length; i++){
        petsDiv.innerHTML += `
        <li>
            ${PetSalon.pets[i].name}
        </li>`;
    }
}

function init()
{
    displayPetName();

}
// waiting to render the html
window.onload = init;