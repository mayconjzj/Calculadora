'use client';

import { Button } from '@/components/Button';

import { useCalculator } from './hooks';
import * as S from './styles';

export const Calculator = () => {
  const {
    num,
    inputNum,
    clear,
    percentage,
    changeSing,
    calculate,
    operaterHandler
  } = useCalculator();

  return (
    <S.Container>
      <h1 className="text-white font-bold text-6xl flex justify-end mr-2 h-16">
        {num}
      </h1>

      <S.Wrapper>
        <Button onClick={() => clear()}>AC</Button>
        <Button onClick={() => changeSing()}>+/-</Button>
        <Button onClick={() => percentage()}>%</Button>
        <Button
          styles="bg-orange-400 text-white"
          onClick={() => operaterHandler('/')}
        >
          /
        </Button>
        <Button styles="bg-[#505050] text-white" onClick={() => inputNum(7)}>
          7
        </Button>
        <Button styles="bg-[#505050] text-white" onClick={() => inputNum(8)}>
          8
        </Button>
        <Button styles="bg-[#505050] text-white" onClick={() => inputNum(9)}>
          9
        </Button>
        <Button
          styles="bg-orange-400 text-white"
          onClick={() => operaterHandler('*')}
        >
          X
        </Button>
        <Button styles="bg-[#505050] text-white" onClick={() => inputNum(4)}>
          4
        </Button>
        <Button styles="bg-[#505050] text-white" onClick={() => inputNum(5)}>
          5
        </Button>
        <Button styles="bg-[#505050] text-white" onClick={() => inputNum(6)}>
          6
        </Button>
        <Button
          styles="bg-orange-400 text-white"
          onClick={() => operaterHandler('-')}
        >
          -
        </Button>
        <Button styles="bg-[#505050] text-white" onClick={() => inputNum(1)}>
          1
        </Button>
        <Button styles="bg-[#505050] text-white" onClick={() => inputNum(2)}>
          2
        </Button>
        <Button styles="bg-[#505050] text-white" onClick={() => inputNum(3)}>
          3
        </Button>
        <Button
          styles="bg-orange-400 text-white"
          onClick={() => operaterHandler('+')}
        >
          +
        </Button>
        <Button
          styles="bg-[#505050] text-white w-[6.5em] text-start px-[2rem]"
          onClick={() => inputNum(0)}
        >
          0
        </Button>
        <Button styles="bg-[#505050] text-white">,</Button>
        <Button styles="bg-orange-400 text-white" onClick={calculate}>
          =
        </Button>
      </S.Wrapper>
    </S.Container>
  );
};
