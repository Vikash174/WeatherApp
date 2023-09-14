
 const API_KEY = "9cf782548d5b50de981fe77e4b826e73";
 const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 async function checkWeather(city){
     const response = await fetch(URL+ city + `&appid=${API_KEY}`);
     let data = await response.json();
     console.log(data);
     updateUI(data);
}

function changeImage(imgElement,weather)
{
   let imageURL = `./Images/${weather.toLowerCase()}.png`;
    imgElement.setAttribute("src", imageURL);	
}
 function updateUI(jsonData){
    let city = document.querySelector(".city");
    let temp = document.querySelector(".temp");
    let img = document.querySelector(".weather-icon");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
    let weather = document.querySelector(".weather");
    
    if(jsonData.cod != 200){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else{
      weather.style.display = "block";
      document.querySelector(".error").style.display = "none";
      city.innerHTML = jsonData.name;
      temp.innerHTML = Math.round(jsonData.main.temp)+"°C";
      changeImage(img,jsonData.weather[0].main);
      humidity.innerHTML = jsonData.main.humidity+"%";
      wind.innerHTML = jsonData.wind.speed+"km/h";
    }


}
  
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
  });


 