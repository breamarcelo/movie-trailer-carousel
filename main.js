var carousel = document.getElementById('carousel');
carousel.addEventListener('scroll', larger);

function prevScroll() {
  var pos = carousel.scrollLeft;
  carousel.scrollLeft = pos + -160;
  larger();
}

function nextScroll() {
  var pos = carousel.scrollLeft;
  carousel.scrollLeft = pos + 160;
  larger();
};

function larger() {
  if (carousel.scrollLeft <= 103) {
    document.getElementById('poster1').classList.add('selected');
    document.getElementById('poster2').classList.remove('selected');
    gundown();
  } else if (carousel.scrollLeft <= 206) {
    document.getElementById('poster2').classList.add('selected');
    document.getElementById('poster1').classList.remove('selected');
    document.getElementById('poster3').classList.remove('selected');
    eon();
  } else if (carousel.scrollLeft <= 339) {
    document.getElementById('poster3').classList.add('selected');
    document.getElementById('poster2').classList.remove('selected');
    document.getElementById('poster4').classList.remove('selected2');
    fotico();
  } else if (carousel.scrollLeft <= 483) {
    document.getElementById('poster4').classList.add('selected2');
    document.getElementById('poster3').classList.remove('selected');
    document.getElementById('poster5').classList.remove('selected');
    elalto();
  } else {
    document.getElementById('poster5').classList.add('selected');
    document.getElementById('poster4').classList.remove('selected2');
  }
}

function gundown() {
  document.getElementById('title').innerHTML = 'Gundown (2011)';
  document.getElementById('imdbLink').href = "https://www.imdb.com/title/tt3421996/?ref_=nm_knf_i1";
  document.getElementById('ytLink').src = "https://www.youtube.com/embed/wBEuplqyxxU";
  document.getElementById('synopsis').innerHTML = 'Synopsis:';
  document.getElementById('cast').innerHTML = 'Cast: Gonzalo Barcel & Ana Feijoo<br>Art Director: Manuel Moreno<br>Cinematographer: Fernando Marron<br>Producer: Ariadna Garcia<br>Writer & Director: Renato Brea<br>Specs: 16mm Film';
}

function eon() {
  document.getElementById('title').innerHTML = 'Eón (2011)';
  document.getElementById('imdbLink').href = "https://www.imdb.com/title/tt4163212/?ref_=nm_knf_i3";
  document.getElementById('ytLink').src = "https://www.youtube.com/embed/XebjP1oYYsk";
  document.getElementById('synopsis').innerHTML = 'Synopsis:';
  document.getElementById('cast').innerHTML = 'Cast: Lorenzo Cordero & Ana Feijoo<br>Art Director: Zarik Ahuir<br>Cinematographer: Antonio Urbano<br>Producer: Ainara Castro<br>Writer & Director: Renato Brea<br>Specs: 16mm Film';
}

function fotico() {
  document.getElementById('title').innerHTML = 'Fótico (2011)';
  document.getElementById('imdbLink').href = "https://www.imdb.com/title/tt4163216/?ref_=nm_knf_i4";
  document.getElementById('ytLink').src = "https://www.youtube.com/embed/8NnckdOTIGA";
  document.getElementById('synopsis').innerHTML = 'Synopsis:';
  document.getElementById('cast').innerHTML = 'Cast: Antonio de la Fuente & Quico Garcia<br>Art Director: Zarik Ahuir<br>Cinematographer: Antonio Urbano<br>Producer: Ainara Castro<br>Writer & Director: Renato Brea<br>Specs: 16mm Film';
}

function elalto() {
  document.getElementById('title').innerHTML = 'El Alto (Web Series)';
  document.getElementById('imdbLink').href = "https://www.imdb.com/title/tt9011546/?ref_=nm_flmg_snd_6";
  document.getElementById('ytLink').src = "https://www.youtube.com/embed/ZezhwgaJJQU";
  document.getElementById('synopsis').innerHTML = 'Synopsis:<br>El Alto was an independent audiovisual project created by Renato Brea and Francis Mateo, based on vignettes and poems written by Francis, and short stories written by Renato.<br>These are micro scenes that shine a light to the idiosyncrasy and diasporic culture of the Caribbean and Latin Americans in the complexity of New York City.<br>A bridge between the old country and the big city.';
  document.getElementById('cast').innerHTML = '';
}
