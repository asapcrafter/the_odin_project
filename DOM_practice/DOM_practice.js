const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');

container.appendChild(content);

const body = document.body;
body.append("Hello World", "bye");

const div = document.createElement('div')
body.append(div);
div.innerText= "Test the div";

const p = document.p;
p.append("Hey I'm red!")