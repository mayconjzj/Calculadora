import { useState } from 'react';

export const useCalculator = () => {
  const [num, setNum] = useState(0);

  const inputNum = (value: number) => {
    setNum(num === 0 ? value : Number(num.toString() + value.toString()));
  };

  return {
    num,
    setNum,
    inputNum
  };
};
