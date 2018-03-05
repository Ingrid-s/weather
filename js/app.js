let entry = getelementById("entry");
let searching = getElementById("search");
let forecast = getElementById("days");

function wheatherIndicators (data){
console.log(data);
}

$.ajax({
    url: `https://api.darksky.net/forecast/d920e4e8c32adde1724250d390963e76/19.4203024!4d,99.1631142`
}).done(handleResponse);
