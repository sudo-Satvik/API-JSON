/*
This script is been developed by Satvik Sharma
~
Saturday May 13 2023 17:27:44 GMT+0530 (India Standard Time)
*/

function changeContext(){
    document.getElementById('btn').innerText = "Click again to Re-Generate";
}  

const button = document.getElementById('btn');
button.addEventListener('click', (gen) => {
    gen.preventDefault()
    const name = document.getElementById('name').innerHTML = "<em>Loading...</em>";
    const gender = document.getElementById('gender').innerHTML = "<em>Loading</em>";
    const eyeColor = document.getElementById('ec').innerHTML = "<em>Loading...</em>";
    const height = document.getElementById('height').innerHTML = "<em>Loading...</em>";

    const randomNum = Math.ceil(Math.random()*83)       //83 because the max intel is below 84 in the SWAPI
    fetch(`https://swapi.dev/api/people/${randomNum}/`)
        .then(response => response.json())
        .then(data => {
            const name = document.getElementById('name').innerHTML = data['name'];
            const gender = document.getElementById('gender').innerHTML = data['gender'];
            const eyeColor = document.getElementById('ec').innerHTML = `${data['eye_color']}`;
            const height = document.getElementById('height').innerHTML = `${data['height']} cm`;
        })
})

