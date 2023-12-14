import { useState } from 'react';

export const useCalculator = () => {
  const [num, setNum] = useState<number>(0);
  const [oldNum, setOldNum] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');

  const inputNum = (number: number) => {
    setNum(Number(num.toString() + number.toString()));
  };

  const clear = () => {
    setNum(0);
    setOldNum(0);
    setOperator('');
  };

  const percentage = () => {
    setNum(num / 100);
  };

  const changeSing = () => {
    setNum(num * -1);
  };

  const calculate = () => {
    operator === '/' && setNum(oldNum / num);
    operator === '*' && setNum(oldNum * num);
    operator === '-' && setNum(oldNum - num);
    operator === '+' && setNum(oldNum + num);
  };

  const operaterHandler = (value: string) => {
    setOperator(value);
    setOldNum(num);
    setNum(0);
  };

  return {
    num,
    inputNum,
    clear,
    percentage,
    changeSing,
    calculate,
    operaterHandler
  };
};
