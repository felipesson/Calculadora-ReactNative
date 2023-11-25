import styles from './style';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const buttons = ['AC', 'DEL', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.','00', '='];

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    try {
      // Use a função eval() para calcular o resultado da expressão
      const result = eval(currentNumber);

      // Verifique se o resultado é um número
      if (!isNaN(result)) {
        setCurrentNumber(result.toString());
      } else {
        // Se o resultado não for um número, limpe o estado
        setCurrentNumber('');
        setLastNumber('Error');
      }
    } catch (error) {
      // Se houver um erro ao calcular, limpe o estado
      setCurrentNumber('');
      setLastNumber('Error');
    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed);
  
    if (['+', '-', 'x', '÷'].includes(buttonPressed)) {
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
      return;
    }
  
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        break;
      case 'AC':
        setLastNumber('');
        setCurrentNumber('');
        break;
      case '=':
        setLastNumber(currentNumber + ' = ');
        calculator();
        break;
      case '%':
        setCurrentNumber(currentNumber + '%');
        break;
      case '00':
        setCurrentNumber(currentNumber + '00');
        break;
      default:
        setCurrentNumber(currentNumber + buttonPressed);
        break;
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      <View style={styles.linha}>
        <Text>.</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' ? (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={[styles.button, { backgroundColor: '#2CA1FA' }]}
            >
              <Text style={[styles.textButton, { color: '#fff', fontSize: 50 }]}>{button}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={styles.button}
            >
              <Text style={[styles.textButton, { color: ['+', '-', 'x', '÷','%', 'AC', 'DEL'].includes(button) ? '#2CA1FA' : '#fff' }]}>
                {button}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}