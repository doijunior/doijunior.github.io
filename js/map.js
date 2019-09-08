function startMap(){
  var map = L.map('map', { scrollWheelZoom: true }).setView([-23.31455, -51.17181], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);


  //  -34.47033512121749, -57.82791137695313 colonia del sacramento
  //  -34.961934505776874, -54.94297027587891 punta del este	
  // -22.926776865793293, -68.19763183593751 san pedro de atacama
  //  -3.7311666450271908, -38.521671295166016 fortaleza

  var marker = L.marker([-34.90733165505383, -56.183395385742195]).addTo(map); //montevideo
  marker.href = "./img/mapmarkers/montevideo.jpg";
  marker.on('click', function () {
    document.querySelector('#lightbox img').onload = () => {
      document.getElementById('lightbox').classList.remove('hidden');
    }
    document.querySelector("#lightbox img").src = this.href;
  });

  marker = L.marker([-34.47033512121749, -57.82791137695313]).addTo(map);
  marker.href = "./img/mapmarkers/colonia-del-sacramento.jpg";
  marker.on('click', function () {
    document.querySelector('#lightbox img').onload = () => {
      document.getElementById('lightbox').classList.remove('hidden');
    }
    document.querySelector("#lightbox img").src = this.href;
  });

  marker = L.marker([-34.961934505776874, -54.94297027587891]).addTo(map);
  marker.href = "./img/mapmarkers/punta-del-este.jpg";
  marker.on('click', function () {
    document.querySelector('#lightbox img').onload = () => {
      document.getElementById('lightbox').classList.remove('hidden');
    }
    document.querySelector("#lightbox img").src = this.href;
  });

  marker = L.marker([-22.926776865793293, -68.19763183593751]).addTo(map);
  marker.href = "./img/mapmarkers/atacama.jpg";

  marker.on('click', function () {
    document.querySelector('#lightbox img').onload = () => {
      document.getElementById('lightbox').classList.remove('hidden');
    }
    document.querySelector("#lightbox img").src = this.href;
  });

  marker = L.marker([-3.7311666450271908, -38.521671295166016]).addTo(map);
  marker.href = "./img/mapmarkers/fortaleza.jpg";

  marker.on('click', function () {
    document.querySelector('#lightbox img').onload = () => {
      document.getElementById('lightbox').classList.remove('hidden');
    }
    document.querySelector("#lightbox img").src = this.href;
  });

  map.on('click', function (e) {
    alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
  });


  document.querySelector('#lightbox a').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#lightbox').classList.add('hidden');

  }, false);

  map.invalidateSize();

  document.querySelectorAll('.window .close').forEach((button) => {
    console.log(button)
    button.addEventListener('click', (e) => {
      console.log(e.target.parentNode.parentNode.classList.add('hidden'))
    });
  })
}
