import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber]  = useState('0');
  const [firstNumber, setFirtNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const limpar = () => {
    setCurrentNumber('0');
    setFirtNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const somar = () => {
    if (firstNumber === '0'){
      setFirtNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const result = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(result));
    }   
  }

  const diminuir = () => {
    if (firstNumber === '0'){
      setFirtNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result));
    }   
  }

  const multiplicar = () => {
    if (firstNumber === '0'){
      setFirtNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('X');
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
    }   
  }

  const dividir = () => {
    if (firstNumber === '0'){
      setFirtNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
    }   
  }

  const resultado = () => {
    if (!firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          somar();
          break;
        case '-':
          diminuir();
          break;
        case 'X':
          multiplicar();
          break;
        case '/':
          dividir();
          break;
        default:
            break;
      }      
    }  
  }

  return (    
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={limpar}/>
          <Button label="()"/>
          <Button label="%"/>         
          <Button label="/" onClick={dividir}/>
        </Row> 
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="X" onClick={multiplicar}/>
        </Row>      
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={diminuir}/>
        </Row>         
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={somar}/>
        </Row> 
        <Row>
          <Button label="+/-"/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label=","/>
          <Button label="=" onClick={resultado}/>
        </Row>    
      </Content>     
    </Container>
  );
}

export default App;
