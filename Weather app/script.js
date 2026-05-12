const apikey=""

let svg=document.querySelector('svg')
let p=document.querySelector("p")
let span=document.querySelector("span")

async function defaultWeather(){
     const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=New York&appid=${apikey}`;
    let data = await fetch(apiurl);
    let b = await data.json();
    console.log(b);
    
    p.innerHTML = b.main.temp + "°С";
    span.innerHTML = b.name;
}

defaultWeather()

async function getWeather(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    let data = await fetch(apiurl);
    let b = await data.json();
    p.innerHTML = b.main.temp + "°С";
    span.innerHTML = b.name;
}


svg.addEventListener("click", () => {
    let input = document.querySelector('input').value.trim();
    if (!input) { alert("enter city name first"); return; }
    getWeather(input);
});

document.querySelector("input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let input = e.target.value.trim();
        if (!input) { alert("enter city name first"); return; }
        getWeather(input);
    }
});