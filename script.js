//Functional code, but... I do repeat myself ;-)

const api = "b3a019163e3b097b458963f8383804bd";
const input = document.querySelector("#input-main");
const btn = document.querySelector("#button-main");
let main = document.querySelector(".main");

btn.addEventListener("click", function () {
  let userLoc = input.value;

  async function whatsTheWeather() {
    try {
      let response = await fetch(
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
          userLoc +
          "&appid=" +
          api +
          "&units=metric"
      );
      json = await response.json();

      function inputCity() {
        let cityName = json.city.name;
        let country = json.city.country;
        let timeZone = json.city.timezone;

        let newDateA = new Date();
        let time = newDateA.toLocaleString({ timeZone: timeZone });

        let city = document.createElement("div");
        city.setAttribute("id", "div-city");
        main.appendChild(city);
        city.innerHTML = cityName + ", " + country + "<br />" + time;
        //`${cityName}, ${country}<br />${time}`
      }
      inputCity();

      //---Création de la div météo générale---//
      let divMeteo = document.createElement("div");
      divMeteo.setAttribute("id", "div-meteo");
      main.appendChild(divMeteo);

      function weatherToday() {
        let divDay1 = document.createElement("div");
        divDay1.setAttribute("id", "day1-meteo");
        divMeteo.appendChild(divDay1);

        let today = document.createElement("div");
        today.setAttribute("class", "today");
        divDay1.appendChild(today);
        today.innerHTML = "Today";

        let temp = json.list[0].main.temp;
        let tempD1 = document.createElement("div");
        tempD1.setAttribute("class", "tempD1");
        divDay1.appendChild(tempD1);
        tempD1.innerHTML = temp + "°";

        let weather = json.list[0].weather[0].main;
        let weatherD1 = document.createElement("div");
        weatherD1.setAttribute("class", "weatherD1");
        divDay1.appendChild(weatherD1);
        weatherD1.innerHTML = weather;

        let icon1 = document.createElement("img");
        icon1.setAttribute("class", "icon1");
        divDay1.append(icon1);
        let icon = json.list[0].weather[0].icon;
        let iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        icon1.setAttribute("src", iconURL);
      }
      weatherToday();

      function weatherDay2() {
        let divDay2 = document.createElement("div");
        divDay2.setAttribute("id", "day2-meteo");
        divMeteo.appendChild(divDay2);

        let date2 = json.list[8].dt;
        let dtGMT2 = new Date(date2 * 1000);
        let dateString2 = dtGMT2.toLocaleDateString();

        let dateD2 = document.createElement("div");
        dateD2.setAttribute("class", "dateD2");
        divDay2.appendChild(dateD2);
        dateD2.innerHTML = dateString2;

        let temp2 = json.list[8].main.temp;
        let tempD2 = document.createElement("div");
        tempD2.setAttribute("class", "tempD2");
        divDay2.appendChild(tempD2);
        tempD2.innerHTML = temp2 + "°";

        let weather2 = json.list[8].weather[0].main;
        let weatherD2 = document.createElement("div");
        weatherD2.setAttribute("class", "weatherD2");
        divDay2.appendChild(weatherD2);
        weatherD2.innerHTML = weather2;

        let icon2 = document.createElement("img");
        divDay2.append(icon2);
        let iconB = json.list[8].weather[0].icon;
        let iconURL2 = "http://openweathermap.org/img/wn/" + iconB + "@2x.png";
        icon2.setAttribute("src", iconURL2);
      }
      weatherDay2();

      function weatherDay3() {
        let divDay3 = document.createElement("div");
        divDay3.setAttribute("id", "day3-meteo");
        divMeteo.appendChild(divDay3);

        let date3 = json.list[16].dt;
        let dtGMT3 = new Date(date3 * 1000);
        let dateString3 = dtGMT3.toLocaleDateString();

        let dateD3 = document.createElement("div");
        dateD3.setAttribute("class", "dateD3");
        divDay3.appendChild(dateD3);
        dateD3.innerHTML = dateString3;

        let temp3 = json.list[16].main.temp;
        let tempD3 = document.createElement("div");
        tempD3.setAttribute("class", "tempD3");
        divDay3.appendChild(tempD3);
        tempD3.innerHTML = temp3 + "°";

        let weather3 = json.list[16].weather[0].main;
        let weatherD3 = document.createElement("div");
        weatherD3.setAttribute("class", "weatherD3");
        divDay3.appendChild(weatherD3);
        weatherD3.innerHTML = weather3;

        let icon3 = document.createElement("img");
        divDay3.append(icon3);
        let iconC = json.list[16].weather[0].icon;
        let iconURL3 = "http://openweathermap.org/img/wn/" + iconC + "@2x.png";
        icon3.setAttribute("src", iconURL3);
      }
      weatherDay3();

      function weatherDay4() {
        let divDay4 = document.createElement("div");
        divDay4.setAttribute("id", "day4-meteo");
        divMeteo.appendChild(divDay4);

        let date4 = json.list[24].dt;
        let dtGMT4 = new Date(date4 * 1000);
        let dateString4 = dtGMT4.toLocaleDateString();

        let dateD4 = document.createElement("div");
        dateD4.setAttribute("class", "dateD4");
        divDay4.appendChild(dateD4);
        dateD4.innerHTML = dateString4;

        let temp4 = json.list[24].main.temp;
        let tempD4 = document.createElement("div");
        tempD4.setAttribute("class", "tempD4");
        divDay4.appendChild(tempD4);
        tempD4.innerHTML = temp4 + "°";

        let weather4 = json.list[24].weather[0].main;
        let weatherD4 = document.createElement("div");
        weatherD4.setAttribute("class", "weatherD4");
        divDay4.appendChild(weatherD4);
        weatherD4.innerHTML = weather4;

        let icon4 = document.createElement("img");
        divDay4.append(icon4);
        let iconD = json.list[24].weather[0].icon;
        let iconURL4 = "http://openweathermap.org/img/wn/" + iconD + "@2x.png";
        icon4.setAttribute("src", iconURL4);
      }
      weatherDay4();

      function weatherDay5() {
        let divDay5 = document.createElement("div");
        divDay5.setAttribute("id", "day5-meteo");
        divMeteo.appendChild(divDay5);

        let date5 = json.list[32].dt;
        let dtGMT5 = new Date(date5 * 1000);
        let dateString5 = dtGMT5.toLocaleDateString();

        let dateD5 = document.createElement("div");
        dateD5.setAttribute("class", "dateD5");
        divDay5.appendChild(dateD5);
        dateD5.innerHTML = dateString5;

        let temp5 = json.list[32].main.temp;
        let tempD5 = document.createElement("div");
        tempD5.setAttribute("class", "tempD5");
        divDay5.appendChild(tempD5);
        tempD5.innerHTML = temp5 + "°";

        let weather5 = json.list[32].weather[0].main;
        let weatherD5 = document.createElement("div");
        weatherD5.setAttribute("class", "weatherD5");
        divDay5.appendChild(weatherD5);
        weatherD5.innerHTML = weather5;

        let icon5 = document.createElement("img");
        divDay5.append(icon5);
        let iconE = json.list[32].weather[0].icon;
        let iconURL5 = "http://openweathermap.org/img/wn/" + iconE + "@2x.png";
        icon5.setAttribute("src", iconURL5);
      }
      weatherDay5();
    } catch (error) {
      alert(error);
    }
  }
  whatsTheWeather();
});

//Function to display the data when pressing 'enter'
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    btn.click();
  }
});

/* ----------------------------- Essai de refactorisation -------------------------------------
const API_KEY = "b3a019163e3b097b458963f8383804bd";
const main = document.querySelector(".main");
const input = document.querySelector("#input-main");
const btn = document.querySelector("#button-main");

// Récupère les données météo pour une ville donnée
async function getWeatherData(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
}

// Ajoute une div contenant les informations de la ville et la date
function addCityInfo(city, country, timeZone) {
  const cityDiv = document.createElement("div");
  cityDiv.setAttribute("id", "div-city");
  main.appendChild(cityDiv);

  const date = new Date().toLocaleString({ timeZone });
  const cityInfo = `${city}, ${country}<br />${date}`;
  cityDiv.innerHTML = cityInfo;
}

// Ajoute une div contenant les informations météo pour un jour donné
function addWeatherInfo(date, temp, weather, iconURL) {
  const dayDiv = document.createElement("div");
  dayDiv.setAttribute("class", "day");
  main.appendChild(dayDiv);

  const dateDiv = document.createElement("div");
  dateDiv.setAttribute("class", "date");
  dayDiv.appendChild(dateDiv);
  dateDiv.innerHTML = date;

  const tempDiv = document.createElement("div");
  tempDiv.setAttribute("class", "temp");
  dayDiv.appendChild(tempDiv);
  tempDiv.innerHTML = `${temp}°`;

  const weatherDiv = document.createElement("div");
  weatherDiv.setAttribute("class", "weather");
  dayDiv.appendChild(weatherDiv);
  weatherDiv.innerHTML = weather;

  const icon = document.createElement("img");
  icon.setAttribute("class", "icon");
  dayDiv.appendChild(icon);
  icon.setAttribute("src", iconURL);
}

// Affiche les informations météo pour les 3 prochains jours
async function showWeather() {
  const city = input.value;
  const data = await getWeatherData(city);

  const { name: cityName, country, timezone } = data.city;

  addCityInfo(cityName, country, timezone);

  for (let i = 0; i < 5; i++) {
    const weather = data.list[i * 8];
    const date = new Date(weather.dt * 1000).toLocaleDateString();
    const temp = Math.round(weather.main.temp);
    const icon = weather.weather[0].icon;
    const iconURL = `http://openweathermap.org/img/wn/${icon}.png`;

    addWeatherInfo(date, temp, weather.weather[0].main, iconURL);
  }
}

btn.addEventListener("click", showWeather); */
