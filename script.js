//console.log("Hola mundo");

const h1 = document.querySelector('h1');
const h2 = document.querySelector('#titulo_2');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const title = document.querySelector('title');
const elem_class = document.getElementsByClassName('parrafito');

//console.log({h1, p, parrafito, pid, input, title});

//console.log(elem_class);

h1.innerHTML = 'Modificando Contenido';

const body_ = document.querySelector('body');

console.log(body_.innerHTML);

const h1_new = document.createElement('h1');
h1_new.innerHTML = "AGREGANDO ELEMENTO<br>";

const img = document.createElement('img');
//img.setAttribute('src', 'img/IMG_20181006_174947900.jpg');

//'https://th.bing.com/th/id/R.c1aa518c6ddcc48c61843d0f1a0c70d0?rik=6hC3NgXvi9XitQ&riu=http%3a%2f%2fmartitascard.files.wordpress.com%2f2009%2f12%2fdiseno-martitas4.jpg&ehk=6mZn3yznznryi7VQE6OJ%2bHPsWJ%2bH1jZUEpxgrwgaI4c%3d&risl=&pid=ImgRaw&r=0');
img.width = 500;
img.height = 700;

body_.append(h1_new);
//h1_new.append(img);

const input_number_1 = document.getElementById('input_1');
const input_number_2 = document.getElementById('input_2');

/*const btn_calcular = document.createElement('button');
btn_calcular.setAttribute('onclick','onClickBtn()');
btn_calcular.innerHTML = "Dar click";
body_.append(btn_calcular);*/

function onClickBtn(){
    h1_new.innerHTML = "Resultado = " + (Number(input_number_1.value) + Number(input_number_2.value));
}