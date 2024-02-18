const apiKey = "3e5d77e7013a41bd0f72a912418404d7";

const weatherDataEl = document.getElementById("weather-data")
const cityInputEl =document.getElementById("city-input")


const formEl =document.querySelector("form");

formEl.addEventListener("submit" , (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;

    getWeatherData(cityValue)
});

async function getWeatherData (cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if(!response.ok) {
            throw new Error("Network respons was not ok");
        }
        const data =await response.json();
        console.log(data);
    } catch (error) {
        
    }
}