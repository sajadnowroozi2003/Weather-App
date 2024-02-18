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
        
        const temperature= Math.round(data.main.temp)
        // console.log(temperature);
        const description = data.weather[0].description
        //  console.log(description);

        const icon = data.weather[0].icon
        //  console.log(icon);

        const details =[
            `feels like: ${ Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}`,
            `Wind Speed:${data.wind.speed}`,
        ]

        weatherDataEl.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        weatherDataEl.querySelector(".temperature").textContent=` ${temperature}°C`
        weatherDataEl.querySelector(".description").textContent=`${description}`


        weatherDataEl.querySelector(".details").innerHTML=details.map ((detail)=>`<div>${detail}</div>`).join("");



    } catch (error) {
        
    }
}