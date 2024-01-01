import { ButtonProps } from '@/models';

import * as S from './styles';

export const Button = ({ onClick, styles, children }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} className={styles}>
      {children}
    </S.Button>
  );
};
