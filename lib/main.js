'use strict';

var secret;
var id;

document.addEventListener('DOMContentLoaded', function () {
  var values = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];

  document.getElementById('slider0').oninput = function () {
    values[0] = this.value;
  };
  document.getElementById('slider1').oninput = function () {
    values[1] = this.value;
  };
  document.getElementById('slider2').oninput = function () {
    values[2] = this.value;
  };
  document.getElementById('slider3').oninput = function () {
    values[3] = this.value;
  };
  document.getElementById('slider4').oninput = function () {
    values[4] = this.value;
  };
  document.getElementById('slider5').oninput = function () {
    values[5] = this.value;
  };
  document.getElementById('slider6').oninput = function () {
    values[6] = this.value;
  };
  document.getElementById('slider7').oninput = function () {
    values[7] = this.value;
  };
  document.getElementById('slider8').oninput = function () {
    values[8] = this.value;
  };
  document.getElementById('slider9').oninput = function () {
    values[9] = this.value;
  };
  document.getElementById('slider10').oninput = function () {
    values[10] = this.value;
  };
  document.getElementById('slider11').oninput = function () {
    values[11] = this.value;
  };
  document.getElementById('slider12').oninput = function () {
    values[12] = this.value;
  };
  document.getElementById('slider13').oninput = function () {
    values[13] = this.value;
  };

  document.getElementById('send').onclick = function (event) {
    event.preventDefault();
    this.className += ' is-loading';

    // console.log(values);

    axios.post('https://muflon.fi/leirinjohtaja.php', { data: values }).then(function (response) {
      //console.log(response);

      secret = response.data.secret;
      id = response.data.id;

      var results = ['Onneksi olkoon, olet selvästi leirinjohtajaehdokasmateriaalia! Vastaamasi kysymykset ovat juuri sellaisia, joita Finnjamboreen johdossa joutuu miettimään. Tuleva suurleiri tulee väistämättä vaikuttamaan partioon Suomessa ja sinulla olisi nyt ainutkertainen mahdollisuus jättää kädenjälkesi sen historiaan.', 'Olet selkeästi pohtinut näitä juttuja! Vaikuttaisi siltä, että sinun kannattaisi hakea finnjamboreen johtajaksi. Suurleiri on suomalaisen partion suurin ja monipuolisin johtamistehtävä, jossa pääset varmasti haastamaan itseäsi tällaisten arvokysymystenkin parissa.', 'Tästä se lähtee: perusperiaatteet kuntoon ja tavoitteita luomaan! Suurleirin reunaehtoja määritellään tulevien leirinjohtajien kanssa. Jos haluat saada siis äänesi vielä paremmin kuuluviin, niin hae leirinjohtajaksi!'];

      document.getElementById('result').innerText = results[Math.floor(Math.random() * 3)];

      document.getElementById('part1').className = 'content hidden';
      document.getElementById('part2').className = 'content';

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }).catch(function (error) {
      console.log(error);
    });
  };

  document.getElementById('send2').onclick = function (event) {
    event.preventDefault();
    this.className += ' is-loading';

    var data = {
      id: id,
      secret: secret,
      name: document.getElementById("name").value,
      contact: document.getElementById("contact").value
    };

    axios.put('https://muflon.fi/leirinjohtaja.php', data).then(function (response) {
      document.getElementById("name").value = '';
      document.getElementById("contact").value = '';
      document.getElementById('send2').innerText = 'Kiitos!';
      document.getElementById('send2').className = 'button is-success is-large';
    }).catch(function (error) {
      console.log(error);
    });
  };
});