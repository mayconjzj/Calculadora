import tw from 'tailwind-styled-components';

export const Button = tw.button`
  w-[3em]
  h-[3em]
  text-[1.5rem]
  rounded-full
  bg-gray-100
  m-[0.3em]
  hover:cursor-pointer
`;

export const Container = tw.div`
  flex
  flex-col
  gap-y-[3em]
  rounded-[1em]
  bg-black
  mt-[3em]
  mx-auto
  max-w-sm
  p-[1em]
`;

export const Wrapper = tw.div`
  flex
  flex-wrap
  justify-center
`;
