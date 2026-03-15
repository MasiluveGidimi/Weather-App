async function getWeather(){

const city = document.getElementById("cityInput").value.trim()

if(city === ""){
alert("Please enter a city")
return
}

const apiKey = "cc7171d55120138f4a5651b685eff70b"

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

const response = await fetch(url)
const data = await response.json()

if(data.cod !== 200){
  alert(data.message)
  return
}

document.getElementById("city").innerText = data.name
document.getElementById("temp").innerText = "Temperature: " + data.main.temp + " °C"
document.getElementById("desc").innerText = "Condition: " + data.weather[0].description
document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%"
document.getElementById("wind").innerText = "Wind: " + data.wind.speed + " km/h"

};