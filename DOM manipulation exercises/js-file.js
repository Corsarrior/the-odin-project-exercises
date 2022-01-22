const container = document.querySelector('#container');

const p = document.createElement('p');

p.setAttribute('style', 'color: red');
p.textContent = "Hey, I'm red";

container.appendChild(p);

const h3 = document.createElement('h3');

h3.setAttribute('style', 'color: blue');
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const div = document.createElement('div');

div.setAttribute('style', 'border-color: black; border: solid; background-color: pink');

const h1 = document.createElement('h1');

h1.textContent = "I'm a div"

const p2 = document.createElement('p');
p2.textContent = "ME TOO";

div.appendChild(h1);
div.appendChild(p2);
container.appendChild(div);

const btn = document.querySelector('#btn');
// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }

// btn.addEventListener('click', function (e) {
//     console.log(e);
// }
// );

// btn.addEventListener('click', function (e) {
//     console.log(e.target);
// }
// );

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
}
);



