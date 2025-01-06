const apiKey = "20cc86642de32adfb1868f517f61b409";
const city = document.querySelector(".search-bar");
const btn = document.querySelector(".search-button");

async function getWeather(city){

    const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=" + city + "&appid=" + apiKey;
    console.log(city)  

    const response = await fetch(api);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".result").style.display = "none";
    }
    else{
        document.querySelector(".result").style.display = "block";
        var data = await response.json();

        let name = data["name"]
        let weather = data["weather"][0]["main"]
        weather = weather.toLowerCase();
        let temp = data["main"]["temp"]
        let humidity = data["main"]["humidity"]
        let wind = data["wind"]["speed"]
        
        document.querySelector(".humidity").innerHTML = humidity + "%";
        document.querySelector(".wind").innerHTML = wind + " km/h";
        document.querySelector(".temp").innerHTML = Math.round(temp) + "°C";
        document.querySelector(".city").innerHTML = name;
        document.getElementById("climate").src ="./imgs/" + weather + ".png";
    }
}

city.addEventListener("keydown", (Event) => {
    if (Event.key == "Enter"){
        btn.click();
    }
});
btn.addEventListener("click", () =>{
    getWeather(city.value);
})

