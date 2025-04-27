const API_KEY = `ce856a1f9009d126d4a5d95c6e82807a`;
const searchTemparature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemparature(data));
};

const setInnertext = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemparature = (temparature) => {
  setInnertext("city", temparature.name);
  setInnertext("temp", temparature.main.temp);
  setInnertext("condition", temparature.weather[0].main);

  const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;

  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
