import React, { useState } from 'react';
// import ProductCard from './components/ProductCard';
import './styles/App.css'
import CalcButton from './components/UI/buttons/CalcButton';

function App() {
  const [calc, setCalc] = useState('0');

  const update = (value) => {
    setCalc(calc + value)
  }

  function calcValue(el) {
    calc === '0' ? 
    setCalc(el) : 
    update(el)
  }

  let cButtons = ['1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-', '0', '.','=']

  return (
    <div className="App">
      <h1 className='calc-result'>{calc}</h1>
      <div className="operators">
        <CalcButton className='OperBtn' onClick={() => {setCalc('0')}}>DEL</CalcButton>
        <CalcButton className='OperBtn' onClick={() => {update('0')}}>C</CalcButton>
        <CalcButton className='OperBtn' onClick={() => {setCalc(Number(calc) !== 0 ? String(Number(calc/100)): '0')}}>%</CalcButton>
        <CalcButton className='OperBtn' onClick={() => {calc > 0 ?update('/'): setCalc('0')}}>/</CalcButton>
      </div>
      <div className='digits'>
      
        {cButtons.map((element, index) => {
          console.log(element, index)
          if (['*', '+', '-'].includes(element)) {
            return (
              <CalcButton key={index} className='OperBtn' onClick={() => calcValue(element)}>
                {element}
              </CalcButton>
            )
          } else if (element === '0') {
            return (
              <CalcButton key={index} className='zero' onClick={() => calcValue(element)}>
              {element}
              </CalcButton>
            )
          } else if (element === '='){
            return (
              <CalcButton key={index} onClick={() => {setCalc(calc !== 0 ? String(eval(calc)): '0')}}>
                {element}
              </CalcButton>
            )
          } else if (element === '.') {
            return (
              <CalcButton key={index} onClick={() => {update('.')}}>
                {element}
              </CalcButton>
            )
          } else {
            return (
              <CalcButton key={index} onClick={() => calcValue(element)}>
                {element}
              </CalcButton>
            )
          }
        })}
      </div>
    </div>
  );
}

export default App;
