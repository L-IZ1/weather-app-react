import logo from './logo.svg';
import './App.css';
import './Weather.js';

function App() {
let weatherData = {
    city: "Paris",
    temperature: 25,
    date: "Fr 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };
  return (
    <div>
      <div>
        <div className="container-app" id="container">
          <div className="search-weather">
            <div className="row">
              <div className="col-md-5 place">
                <form className="search-form" id="search-form">
                  <input
                    id="inputtype"
                    type="search"
                    className="form-control"
                    placeholder="enter a place 🔎"
                    autofocus="on"
                    autocomplete="off"
                  />
                </form>
              </div>
              <div>
                <div className="col button col-md-2">
                  <form>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="search"
                    />
                  </form>
                </div>
                <div className="col button col-md-2">
                  <button className="btn btn-secondary">
                    <i className="fa fa-thin fa-location-pin"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="live-weather">
              <div className="row">
                <div className="col-md-7 live-city">
                  <ul>
                    <li>
                      <span className="searched-place">{weatherData.city}</span>
                    </li>
                    <li className="date">{weatherData.date}</li>
                  </ul>
                  <div className="d-flex weather-temperature">
                    <img
                      src={weatherData.imgUrl}
                      alt=""
                      id="icon"
                      className="float-left"
                    />
                    <div className="float-left">
                      <strong className="temp-number">
                        {weatherData.temperature}
                      </strong>
                      <span className="units">
                        <a href="/" className="active">
                          °C|
                        </a>
                        <a href="/">°F</a>
                      </span>
                    </div>
                  </div>
                  <ul>
                    <li className="weather-description-live">
                      {weatherData.description}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 weather-live">
                  <p className="card-text-weather-conditions">
                    <i className="fa-solid fa-arrow-up max-current-temp"></i>{" "}
                    Max:
                    <span id="max-temp"></span>°C
                    <br />
                    <i className="fa-solid fa-arrow-down min-current-temp"></i>{" "}
                    Min:
                    <span id="min-temp"></span>°C
                    <br />
                    Humidity:<span>{weatherData.humidity}</span>%<br />
                    Wind:<span>{weatherData.wind}</span>km/h
                  </p>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <hr />{" "}
            </div>
            <div className="weather-forecast" id="weather-forecast"></div>
          </div>
        </div>
        <div>
          <p className="madebyme">
            <a
              className="link-github"
              href="https://github.com/L-IZ1/my-weather-app"
            >
              Open-source code
            </a>
            <a
              className="link-linkedin"
              href="https://www.linkedin.com/in/elisepetitjean/"
            >
              {" "}
              by Elise Petitjean <i className="fa-brands fa-linkedin"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


export default App;
