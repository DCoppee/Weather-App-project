const api = 'b3a019163e3b097b458963f8383804bd';

const body = document.body;

const input = document.querySelector('#input-main');
const btn = document.querySelector('#button-main');

btn.addEventListener('click',function(){
        
        let userLoc = input.value;
        
        let fetchName = (userLoc) => fetch('http://api.openweathermap.org/data/2.5/weather?q='+userLoc+'&appid='+api+'&units=metric')
        
        fetchName(userLoc)    
        
        .then (response => response.json())
        .then((data)=>{
            console.log(data);

            let cityName = data.name
            console.log(cityName);

            const city = document.querySelector('#div-city');
            city.innerHTML = cityName;

            let date = data.dt;
            let dtGMT = new Date(date * 1000);
            console.log(dtGMT.toLocaleDateString());

            let temp = data.main.temp;
            console.log(temp+'°');

            let weather = data.weather[0].main;
            console.log(weather);
            })
        
    })
/*})*/
            

//Morceaux peut-être pour plus tard
/*
const city = document.querySelector('#div-city');

const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');
const day4 = document.querySelector('#day4');
const day5 = document.querySelector('#day5');

let icon1 = document.querySelector('#icon1');
let icon2 = document.querySelector('#icon2');
let icon3 = document.querySelector('#icon3');
let icon4 = document.querySelector('#icon4');
let icon5 = document.querySelector('#icon5');

let clearSky = 'http://openweathermap.org/img/wn/01d@2x.png';
let fewClouds = 'http://openweathermap.org/img/wn/02d@2x.png';
let scatteredClouds = 'http://openweathermap.org/img/wn/03d@2x.png';
let brokenClouds = 'http://openweathermap.org/img/wn/04d@2x.png';
let showerRain = 'http://openweathermap.org/img/wn/09d@2x.png';
let rain = 'http://openweathermap.org/img/wn/10d@2x.png';
let thunderstorm = 'http://openweathermap.org/img/wn/11d@2x.png';
let snow = 'http://openweathermap.org/img/wn/13d@2x.png';
let mist = 'http://openweathermap.org/img/wn/50d@2x.png';*/

/*const dt1 = document.createElement('span');
body.appendChild(dt1);
const temp1 = document.createElement('span');
body.appendChild(temp1);

const dt2 = document.createElement('span');
body.appendChild(dt2);
const temp2 = document.createElement('span');
body.appendChild(temp2);

const dt3 = document.createElement('span');
body.appendChild(dt3);
const temp3 = document.createElement('span');
body.appendChild(temp3);

const dt4 = document.createElement('span');
body.appendChild(dt4);
const temp4 = document.createElement('span');
body.appendChild(temp4);

const dt5 = document.createElement('span');
body.appendChild(dt5);
const temp5 = document.createElement('span');
body.appendChild(temp5);*/

/*let iconDescr = json.weather.main;

        if (iconDescr === 'Clear sky') {
            icon1.setAttribute('src','http://openweathermap.org/img/wn/01d@2x.png');
        }
        else if (iconDescr === 'Few clouds') {
            icon1.setAttribute('src','http://openweathermap.org/img/wn/02d@2x.png');
        }
        else if (iconDescr === 'Scattered clouds') {
            icon1.setAttribute('src','http://openweathermap.org/img/wn/03d@2x.png');
        }
        else if (iconDescr === 'Broken clouds') {
            icon1.setAttribute('src','http://openweathermap.org/img/wn/04d@2x.png');
        }
        else if (iconDescr === 'Shower rain') {
            icon1.setAttribute('src','http://openweathermap.org/img/wn/09d@2x.png');
        }
        else if (iconDescr === 'Rain') {
            icon1.setAttribute('src','http://openweathermap.org/img/wn/10d@2x.png');
        }
        else if (iconDescr === 'Thunderstorm') {
            icon1.setAttribute('src','http://openweathermap.org/img/wn/11d@2x.png');
        }
        else if (iconDescr === 'Snow') {
            icon1.setAttribute('src','http://openweathermap.org/img/wn/13d@2x.png');
        }
        else if (iconDescr === 'Mist') {
        icon1.setAttribute('src','http://openweathermap.org/img/wn/50d@2x.png');
        }*/
        
        /*icon2.setAttribute('src','http://openweathermap.org/img/wn/10d@2x.png');
        icon3.setAttribute('src','http://openweathermap.org/img/wn/10d@2x.png');
        icon4.setAttribute('src','http://openweathermap.org/img/wn/10d@2x.png');
        icon5.setAttribute('src','http://openweathermap.org/img/wn/10d@2x.png');*/