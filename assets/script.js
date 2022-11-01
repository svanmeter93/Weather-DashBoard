var api = "11b506407df034b36552a6b721f08663";

// function cityResult(name){
//     console.log("This is the weather today in " + name +"!")
// }
// // Insert user entry into prentasies
// cityResult('Kansas City');
// var input = document.getElementById(""

// console.log(userInp);

function userResult(event) {
  event.preventDefault();
  const userSearch = document.getElementById("textarea1").value.trim();
  const coordsURL = `https://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=1&appid=${api}`;
  fetch(coordsURL)
    .then((response) => response.json())
    .then((data) => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      //   console.log(data);
      const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;
      fetch(currentURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        const currentWind = data.wind.speed;
        const currentTemp= data.main.temp;
        const currentHumidity = data.main.humidity;
    });
      const fivedayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;
      fetch(fivedayURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < data.list.length; i += 8) {
            var maxTemp = data.list[i].temp_max;
            var minTemp = data.list[i].temp_min;
            // console.log(data.list[i]);
          }
        });
    });
}

function createCard(data) {}

search.addEventListener("click", userResult);
