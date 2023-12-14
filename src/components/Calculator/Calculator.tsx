'use client';

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
        <S.Button onClick={() => clear()}>AC</S.Button>
        <S.Button onClick={() => changeSing()}>+/-</S.Button>
        <S.Button onClick={() => percentage()}>%</S.Button>
        <S.Button
          className="bg-orange-400 text-white"
          onClick={() => operaterHandler('/')}
        >
          /
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white"
          onClick={() => inputNum(7)}
        >
          7
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white"
          onClick={() => inputNum(8)}
        >
          8
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white"
          onClick={() => inputNum(9)}
        >
          9
        </S.Button>
        <S.Button
          className="bg-orange-400 text-white"
          onClick={() => operaterHandler('*')}
        >
          X
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white"
          onClick={() => inputNum(4)}
        >
          4
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white"
          onClick={() => inputNum(5)}
        >
          5
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white"
          onClick={() => inputNum(6)}
        >
          6
        </S.Button>
        <S.Button
          className="bg-orange-400 text-white"
          onClick={() => operaterHandler('-')}
        >
          -
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white"
          onClick={() => inputNum(1)}
        >
          1
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white"
          onClick={() => inputNum(2)}
        >
          2
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white"
          onClick={() => inputNum(3)}
        >
          3
        </S.Button>
        <S.Button
          className="bg-orange-400 text-white"
          onClick={() => operaterHandler('+')}
        >
          +
        </S.Button>
        <S.Button
          className="bg-[#505050] text-white w-[6.5em] text-start px-[2rem]"
          onClick={() => inputNum(0)}
        >
          0
        </S.Button>
        <S.Button className="bg-[#505050] text-white">,</S.Button>
        <S.Button className="bg-orange-400 text-white" onClick={calculate}>
          =
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
