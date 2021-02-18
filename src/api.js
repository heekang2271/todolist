import axios from "axios";

const API_KEY = "fc429eb093ad572f27c439226d0ee864";

const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
        appid: API_KEY,
        lang: "kr"
    }
})

export const getWeather = (latitude, longitude) => api.get("weather", {
    params: {
        lat: latitude,
        lon: longitude,
    }
});