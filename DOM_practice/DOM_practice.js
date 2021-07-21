/*
Element Creation:
    const div = document.createElement('div');
Append Elements:
    [parentNode].appendChild([childNode])
    [parentNode].insertBefore([newNode],[referenceNode])
    [parentNode].removeChild([child])
*/

const containerTest = document.querySelector('#testContainer');
    const testP = document.createElement('p');
        testP.style.color = 'red';
        testP.textContent = "Hey I'm red!";
        containerTest.appendChild(testP);
    const testH3 = document.createElement('h3');
        testH3.style.color = 'blue';
        testH3.textContent = "I'm a blue h3!";
        containerTest.appendChild(testH3);

const bigBody = document.querySelector('#body');
    const div = document.createElement('div');
        div.borderStyle
        bigBody.insertBefore('#testContainer','#body');