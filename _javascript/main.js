document.addEventListener('DOMContentLoaded', function () {
  var values = [50,50,50,50,50,50,50,50,50,50,50,50]

  document.getElementById('slider0').oninput = function() { values[0] = this.value; }
  document.getElementById('slider1').oninput = function() { values[1] = this.value; }
  document.getElementById('slider2').oninput = function() { values[2] = this.value; }
  document.getElementById('slider3').oninput = function() { values[3] = this.value; }
  document.getElementById('slider4').oninput = function() { values[4] = this.value; }
  document.getElementById('slider5').oninput = function() { values[5] = this.value; }
  document.getElementById('slider6').oninput = function() { values[6] = this.value; }
  document.getElementById('slider7').oninput = function() { values[7] = this.value; }
  document.getElementById('slider8').oninput = function() { values[8] = this.value; }
  document.getElementById('slider9').oninput = function() { values[9] = this.value; }
  document.getElementById('slider10').oninput = function() { values[10] = this.value; }
  document.getElementById('slider11').oninput = function() { values[11] = this.value; }
  document.getElementById('slider12').oninput = function() { values[12] = this.value; }
  document.getElementById('slider13').oninput = function() { values[13] = this.value; }

  document.getElementById('send').onclick = function(event) {
    event.preventDefault();
    this.className += ' is-loading';

    // console.log(values);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://muflon.fi/leirinjohtaja.php', true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
        var results = [
          'Onneksi olkoon, olet selvästi leirinjohtajaehdokasmateriaalia! Vastaamasi kysymykset ovat juuri sellaisia, joita Finnjamboreen johdossa joutuu miettimään. Tuleva suurleiri tulee väistämättä vaikuttamaan partioon Suomessa ja sinulla olisi nyt ainutkertainen mahdollisuus jättää kädenjälkesi sen historiaan.',
          'Olet selkeästi pohtinut näitä juttuja! Vaikuttaisi siltä, että sinun kannattaisi hakea finnjamboreen johtajaksi. Suurleiri on suomalaisen partion suurin ja monipuolisin johtamistehtävä, jossa pääset varmasti haastamaan itseäsi tällaisten arvokysymystenkin parissa.',
          'Tästä se lähtee: perusperiaatteet kuntoon ja tavoitteita luomaan! Suurleirin reunaehtoja määritellään tulevien leirinjohtajien kanssa. Jos haluat saada siis äänesi vielä paremmin kuuluviin, niin hae leirinjohtajaksi!'
        ]

        document.getElementById('result').innerText = results[Math.floor(Math.random()*(3))];

        document.getElementById('part1').className = 'content hidden';
        document.getElementById('part2').className = 'content';
      }
    }

    xhr.send(JSON.stringify({data: values}));
  }
});