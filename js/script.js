var likes = 0;
var dislikes = 0;
traerDatos();
function like() {

    likes = likes + 1;
    localStorage.setItem("likes", likes);

    var voto = document.createElement('h1');
    var text = document.getElementById("informacion");
    var button = document.createElement('button');

    while (text.firstChild) {
        text.removeChild(text.firstChild);
    }

    
    voto.innerHTML = "Tu voto ha sido agregado correctamente";
    button.type = 'button';
    button.className = "material-symbols-outlined"
    button.innerText = 'volver a votar';
    button.id = "vuelva a votar"
    button.onclick = function(){volverAVotar()};

    text.appendChild(voto)
    text.appendChild(button)

    
    
    
}

function traerDatos() {
    likes = JSON.parse(localStorage.getItem("likes"))
    dislikes = JSON.parse(localStorage.getItem("dislikes"))
}

function dislike() {
    dislikes = dislikes + 1;
    localStorage.setItem("dislikes", dislikes);

    var voto = document.createElement('h1');
    var text = document.getElementById("informacion");
    var button = document.createElement('button');

    while (text.firstChild) {
        text.removeChild(text.firstChild);
    }

    
    voto.innerHTML = "Tu voto ha sido agregado correctamente";
    button.type = 'button';
    button.className = "material-symbols-outlined"
    button.innerText = 'volver a votar';
    button.onclick = function(){volverAVotar()};
    text.appendChild(voto)
    text.appendChild(button)
}

function volverAVotar() {
    
    var text = document.getElementById("informacion");
    var opinion = document.createElement("h3");
    var ironman = document.createElement("h1");
    var texto = document.createElement("h2");
    var voto = document.createElement("h1");

    opinion.innerHTML = "Dinos tu opinión sobre";
    ironman.innerHTML = "Ironman?"
    texto.innerHTML = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
    voto.innerHTML = "¿Cuál es tu voto?"

    buttonLike = document.createElement("button");
    buttonDislike = document.createElement("button");
    buttonLike.type = 'button';
    buttonLike.className = "material-symbols-outlined";
    buttonLike.innerText = "thumb_up";
    buttonLike.onclick = function(){like()};

    buttonDislike.type = 'button';
    buttonDislike.className = "material-symbols-outlined";
    buttonDislike.innerText = "thumb_down";
    buttonDislike.onclick = function(){dislike()};

    while (text.firstChild) {
        text.removeChild(text.firstChild);
    }

    text.appendChild(opinion)
    text.appendChild(ironman)
    text.appendChild(texto)
    text.appendChild(voto)
    text.appendChild(buttonLike)
    text.appendChild(buttonDislike)
}

const barraProgreso = document.getElementById('barra-progreso');
const cantidadProgreso = document.getElementById('cantidad-progreso');
let progreso = 0;
let total = likes+dislikes;
const intervalo = setInterval(() => {
  progreso = (likes/total)*100;
  const porcentaje = `${progreso.toFixed(2)}%`;
  barraProgreso.style.width = porcentaje;
  cantidadProgreso.innerHTML = porcentaje;
  progreso = progreso % 100;
}, 20);