import '../styles/kalkulator.css';
import {Calculator} from './kalkulatorLogika.js';
import {tests} from './kalkulatorTesty';

const currentCalculation = new Calculator;
const screen = document.getElementById('display');
const numberKeys = document.getElementsByClassName("numberKey");

function print(field, calc)
{
    field.textContent = calc.text();
}

// number keys
[...numberKeys].forEach((key) =>
{
    key.addEventListener('click', () =>
    {
        currentCalculation.type(key.dataset.digit); 
        print(screen, currentCalculation);
    });
});

// operation keys
document.getElementById('plus').addEventListener('click', () => {currentCalculation.plus(); print(screen, currentCalculation);})
document.getElementById('minus').addEventListener('click', () => {currentCalculation.minus(); print(screen, currentCalculation);})
document.getElementById('multiply').addEventListener('click', () => {currentCalculation.multiply(); print(screen, currentCalculation);})
document.getElementById('divide').addEventListener('click', () => {currentCalculation.divide(); print(screen, currentCalculation);})
document.getElementById('equal').addEventListener('click', () => {currentCalculation.calculate(); print(screen, currentCalculation);})

// function keys
document.getElementById('clear').addEventListener('click', () => {currentCalculation.clear(); screen.textContent = '_';})
document.getElementById('delete').addEventListener('click', () => {currentCalculation.delete(); print(screen, currentCalculation);})
document.getElementById('comma').addEventListener('click', () => {currentCalculation.insertComma(); print(screen, currentCalculation);})
document.getElementById('morp').addEventListener('click', () => {currentCalculation.insertMinus(); print(screen, currentCalculation);})

// tests
tests.forEach(test => test());