import React from "react";
import HomePresenter from "./HomePresenter";
import { getWeather } from "../../api";

const MAX_BGNUM = 13;
const COORD = "coord";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bgNum: Math.floor(Math.random() * MAX_BGNUM),
            coord: localStorage.getItem(COORD),
            weatherData: null,
            error: false,
            weatherLoad: true,
            bgLoad: true,
            blurLoad: true
        }
    }

    getWeatherData = async (latitude, longitude) => {
        try {
            const {
                data: {
                    main: {
                        temp
                    },
                    name: city,
                    weather
                }
            } = await getWeather(latitude, longitude);

            const {
                description,
                icon
            } = weather[0];

            this.setState({
                weatherData: {
                    city,
                    description,
                    icon,
                    temp: (temp - 273.15).toFixed(1)
                }
            });
        } catch (e) {
            this.setState({
                error: true
            })
        } finally {
            this.setState({
                weatherLoad: false
            })
        }
    }

    bgOnLoad = () => {
        this.setState({
            bgLoad: false
        })
    }

    blurOnLoad = () => {
        this.setState({
            blurLoad: false
        })
    }

    componentDidMount() {
        const { coord } = this.state;
        if (coord === null) {
            navigator.geolocation.getCurrentPosition((geo) => {
                const {
                    coords: {
                        latitude, longitude
                    }
                } = geo;

                localStorage.setItem(COORD, JSON.stringify({
                    lat: latitude,
                    long: longitude
                }));
                this.getWeatherData(latitude, longitude);
            }, () => {
                    this.setState({
                        error: true,
                        weatherLoad: false
                    })
            })
        } else {
            const { lat, long } = JSON.parse(coord);
            this.getWeatherData(lat, long);
        }
    }

    render() {
        const data = this.state;
        return <HomePresenter {...data} bgOnLoad={this.bgOnLoad} blurOnLoad={ this.blurOnLoad }/>
    }
}