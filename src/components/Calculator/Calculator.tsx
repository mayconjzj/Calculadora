import * as S from './styles';

export const Calculator = () => {
  return (
    <S.Container>
      <h1 className="text-white font-bold text-6xl flex justify-end mr-2 h-16">
        0
      </h1>

      <S.Wrapper>
        <S.Button>AC</S.Button>
        <S.Button>+/-</S.Button>
        <S.Button>%</S.Button>
        <S.Button className="bg-orange-400 text-white">/</S.Button>
        <S.Button className="bg-[#505050] text-white">7</S.Button>
        <S.Button className="bg-[#505050] text-white">8</S.Button>
        <S.Button className="bg-[#505050] text-white">9</S.Button>
        <S.Button className="bg-orange-400 text-white">X</S.Button>
        <S.Button className="bg-[#505050] text-white">4</S.Button>
        <S.Button className="bg-[#505050] text-white">5</S.Button>
        <S.Button className="bg-[#505050] text-white">6</S.Button>
        <S.Button className="bg-orange-400 text-white">-</S.Button>
        <S.Button className="bg-[#505050] text-white">1</S.Button>
        <S.Button className="bg-[#505050] text-white">2</S.Button>
        <S.Button className="bg-[#505050] text-white">3</S.Button>
        <S.Button className="bg-orange-400 text-white">+</S.Button>
        <S.Button className="bg-[#505050] text-white w-[6.5em] text-start px-[2rem]">
          0
        </S.Button>
        <S.Button className="bg-[#505050] text-white">,</S.Button>
        <S.Button className="bg-orange-400 text-white">=</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
