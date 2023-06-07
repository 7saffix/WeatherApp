const form = document.querySelector('form');
const search = document.getElementById('search');
const weather = document.getElementById('weather');

const API_key = `99aeb5fa66824ce764a477b3d28c0fac`;

const getWeather = async (city) => {
    weather.innerHTML = `loading...`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    if (data.cod == '404') {
        weather.innerHTML = `<h3>City Not Found</h3>`;
        return;
    }
    weather.innerHTML = `
        <div class="row" id="weather">
            <div><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div>
            <div>
                <h3>${data.main.temp}°C</h3>
                <h4>${data.weather[0].main}</h4>
            </div>
        </div>`
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather(search.value);
})