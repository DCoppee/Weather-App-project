const api = 'b3a019163e3b097b458963f8383804bd';

const body = document.body;

const input = document.querySelector('#input-main');
const btn = document.querySelector('#button-main');

btn.addEventListener('click',function(){
        
        let userLoc = input.value;
        
        let fetchName = (userLoc) => fetch('http://api.openweathermap.org/data/2.5/forecast?q='+userLoc+'&appid='+api+'&units=metric')
                                        
        fetchName(userLoc)    
        
        .then (response => response.json())
        .then((json)=>{ console.log(json);
            let cityName = json.city.name;

            const city = document.querySelector('#div-city');
            city.innerHTML = cityName;
        
        //---Données du day1---//
            let date = json.list[0].dt;
            let dtGMT = new Date(date * 1000);
            let dateString = dtGMT.toLocaleDateString();

            let temp = json.list[0].main.temp;

            let weather = json.list[0].weather[0].main;

            const day1 = document.querySelector('#day1-meteo');
            day1.innerHTML = dateString+"<br />"+temp+'°'+"<br />"+weather;
            
            let icon1 = document.createElement('img');
            day1.append(icon1);
            let icon = json.list[0].weather[0].icon;
            let iconURL = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
            icon1.setAttribute("src",iconURL);
            
        //---Données du day2---//
            let date2 = json.list[8].dt;
            let dtGMT2 = new Date(date2 * 1000);
            let dateString2 = dtGMT2.toLocaleDateString(); console.log(dateString2);

            let temp2 = json.list[8].main.temp;

            let weather2 = json.list[8].weather[0].main;

            const day2 = document.querySelector('#day2-meteo');
            day2.innerHTML = dateString2+"<br />"+temp2+'°'+"<br />"+weather2;
            
            let icon2 = document.createElement('img');
            day2.append(icon2);
            let iconb = json.list[8].weather[0].icon;
            let iconURL2 = 'http://openweathermap.org/img/wn/'+iconb+'@2x.png';
            icon2.setAttribute("src",iconURL2);
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