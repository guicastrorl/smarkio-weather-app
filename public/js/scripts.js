$(document).on('keypress', function(event) {
  if(event.which == 13) {
    var input = $('#input').val().trim();
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=47dcbcc57c37f950f7a5af5f0aa4fe8b`,
      datatype: 'jsonp',
      data: { units: 'metric', lang: 'pt' }
    }).then(function (data) {
      var name = data.name;
      var country = data.sys.country;
      var temperature = parseFloat(data.main.temp.toFixed(0));
      var weather = titleize(data.weather[0].description);
      var humidity = data.main.humidity;

      $('#city').text(`${name}, ${country}`);
      $('#temperature').text(`${temperature} ºC`);
      $('#humidity').text(`${humidity} % HR`);
      $('#weather').text(weather);
      $('#img').attr("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

      var li = document.createElement('LI');
      var text = document.createTextNode(`${name}, ${temperature} ºC, ${weather}`);
      li.appendChild(text);

      var list = document.getElementById('realTimeHistory');
      list.insertBefore(li, list.childNodes[0]);

      $.post('/', {
        name: data.name
      })
    })
    document.getElementById('input').value = '';
  }
});

function titleize(text) {
  var words = text.toLowerCase().split(" ");
  for (var a = 0; a < words.length; a++) {
      var w = words[a];
      words[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(" ");
}