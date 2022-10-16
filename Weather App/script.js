const search = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
let Weather = document.querySelector("#weather");

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const appid = "&appid=637706e87e5e0728f02c54a94f025631";
const iconUrl ="http://openweathermap.org/img/w/";

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let cityName = search.value;
    search.value = "";

    fetch(apiUrl + "q=" + cityName + appid)
        .then(res => res.json())
        .then((data) => {
            console.log(data.main.temp - 273.15);
            console.log(data.weather[0].description);
            console.log(data.wind.speed);
            console.log(data);
            
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;
            let descr = data.weather[0].description;
            let icon = iconUrl + data.weather[0].icon + ".png";
            let temp = parseInt(data.main.temp - 273.15);

            let html = `
                <h1>Weather in ${cityName}</h1>
                <div>${temp}°C</div>
                <p>${data.weather[0].main}</p>
                <div><img id="weatheIcon" src=${icon}><p>${descr}</p></div>
                <div><h2>Humidity:</h2> ${humidity}%</div>
                <div><h2>Wind:</h2> ${windSpeed}km/h</div>
            `;
            Weather.innerHTML = "";
            Weather.innerHTML = html;
        });
});

//<div><img id="weatherIcon" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/117130948/original/80658d3c95bf85bd9180dd563272568ad31b4d9e/create-a-32x32-pixel-art.png" alt=""><p>Broken Clouds</p></div>