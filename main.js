const apiKey = 'd3057b3385514ca5a93185410230910';


// http://api.weatherapi.com/v1/current.json?key=d3057b3385514ca5a93185410230910&q=Dnipro&aqi=no


const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Dnipro&aqi=no`

fetch(query).then((response) => {
  return response.json()
}).then((data) => {
  console.log(data);
})