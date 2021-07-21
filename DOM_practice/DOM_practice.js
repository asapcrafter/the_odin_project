/*
Element Creation:
    const div = document.createElement('div');
Append Elements:
    [parentNode].appendChild([childNode])
    [parentNode].insertBefore([newNode],[referenceNode])
    [parentNode].removeChild([child])
*/

//Exercise 1..
const containerTest = document.querySelector('#testContainer');
    const testP = document.createElement('p');
        testP.style.color = 'red';
        testP.textContent = "Hey I'm red!";
        containerTest.appendChild(testP);
    const testH3 = document.createElement('h3');
        testH3.style.color = 'blue';
        testH3.textContent = "I'm a blue h3!";
        containerTest.appendChild(testH3);

const bigBody = document.body; // <body>
    var div = document.createElement('div');
        div.style.borderColor = 'black';
        div.style.backgroundColor = 'pink';
        div.textContent = "This is the body";
        bigBody.insertBefore(div, containerTest);
    var h1 = document.createElement('h1');
        h1.textContent = "I'm in a div";
        div.appendChild(h1);
    var p = document.createElement('p');
        p.textContent = "ME TOO!";
        div.appendChild(p);

//Exercise 2 (Buttons)..
const buttonTwo = document.querySelector('#buttonTwo');
    buttonTwo.onclick = () => alert("Hello, this is the 2nd button");
const buttonThree = document.querySelector('#buttonThree');
    buttonThree.addEventListener('click', () => {
        alert("Hello WW3");
    });