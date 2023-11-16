import { useState } from 'react';

export const useCalculator = () => {
  const [num, setNum] = useState(0);

  const inputNum = (e: number) => {
    setNum(Number(num.toString() + e.toString()));
  };

  const clear = () => {
    setNum(0);
  };

  const percentage = () => {
    setNum(num / 100);
  };

  const operaterHandler = () => {
    setNum(num * -1);
  };

  return {
    num,
    inputNum,
    clear,
    percentage,
    operaterHandler
  };
};
