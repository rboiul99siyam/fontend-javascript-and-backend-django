const getWeather = ()=>
{
    try
    {
        const InputWeather = document.getElementById("InputWeather").value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${InputWeather}&appid=cc8390f0abfe00d911fe0cc80b73b394&units=metric`)
        .then((res)=> res.json())
        .then((data)=>DisplayDataWeather(data))
    }
    catch (err)
    {
        console.err("Errow fetching weather data :",err)
    }
}


const DisplayDataWeather = (data)=>
{
    console.log(data)
    const cityName = data.name;
    document.getElementById("cityName").innerText = cityName;

    const temp = data.main.temp;
    document.getElementById("temp").innerText = temp;

    const wind = data.wind.speed;
    document.getElementById("WindSpeed").innerText = wind;

    const humidity  = data.weather[0].main;
    document.getElementById("humidity").innerText = humidity

    const weatherIconCode = data.weather[0].icon;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

    document.getElementById("weatherIcon").src = weatherIconUrl;
}

