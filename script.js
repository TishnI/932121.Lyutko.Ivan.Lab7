
const squareButtonElement = document.querySelector('.js-square-button');
const triangleButtonElement = document.querySelector('.js-triangle-button');
const circleButtonElement = document.querySelector('.js-circle-button');
const canvasElement = document.querySelector('.js-canvas');
const inputElement = document.querySelector('input');

let numberOfElement = inputElement.value;
const canvasHeight = canvasElement.scrollHeight;
const canvasWidth = canvasElement.scrollWidth;

let selectedElement;

function randomInteger(min, max) 
{
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const createNewSquareElement = () =>
{
    numberOfElement = inputElement.value;
    if(numberOfElement == 0)
        return;

    for (let index = 0; index < numberOfElement; index++) 
    {
        let newSquareElement = document.createElement('div');
        newSquareElement.classList.add('canvas__item--square');
        newSquareElement.style.top = randomInteger(0, canvasHeight) + 'px';
        newSquareElement.style.left = randomInteger(0, canvasWidth) + 'px';
        
        let squareWidth = randomInteger(20, 200);
        newSquareElement.style.width = squareWidth + 'px';
        newSquareElement.style.height = squareWidth + 'px';

        canvasElement.append(newSquareElement);
        addListenerToNewElement(newSquareElement);
    }
    
}

const createNewTriangleElement = () =>
{
    numberOfElement = inputElement.value;
    if(numberOfElement == 0)
        return;
    for (let index = 0; index < numberOfElement; index++) 
    {
        let newTriangelElement = document.createElement('div');
        newTriangelElement.classList.add('canvas__item--triangle');
        newTriangelElement.style.top = randomInteger(0, canvasHeight) + 'px';
        newTriangelElement.style.left = randomInteger(0, canvasWidth) + 'px';
        canvasElement.append(newTriangelElement);
        addListenerToNewElement(newTriangelElement);
    }
    
}

const createNewCircleElement = () =>
{
    numberOfElement = inputElement.value;
    if(numberOfElement == 0)
        return;
    for (let index = 0; index < numberOfElement; index++)
    {
        let newCircleElement = document.createElement('div');
        newCircleElement.classList.add('canvas__item--circle');
        newCircleElement.style.top = randomInteger(0, canvasHeight) + 'px';
        newCircleElement.style.left = randomInteger(0, canvasWidth) + 'px';

        let circleRadius = randomInteger(20, 300);
        newCircleElement.style.width = circleRadius + 'px';
        newCircleElement.style.height = circleRadius + 'px';

        canvasElement.append(newCircleElement);
        addListenerToNewElement(newCircleElement);
    }
    
}

const selectElement = (elem) =>
{
    if(selectedElement != undefined)
    {
        if(selectedElement != elem)
        {
            selectedElement.target.classList.remove('selected');
            selectedElement = elem;
            selectedElement.target.classList.add('selected');
            return;
        }
    }
    selectedElement = elem;
    selectedElement.target.classList.add('selected');
}

const addListenerToNewElement = (elem) =>
{
    elem.addEventListener('click', selectElement);
    elem.addEventListener('dblclick', removeElement);
}

const removeElement = (elem) =>
{
    elem.target.remove();
}


squareButtonElement.addEventListener('click', createNewSquareElement);
triangleButtonElement.addEventListener('click', createNewTriangleElement);
circleButtonElement.addEventListener('click', createNewCircleElement);
