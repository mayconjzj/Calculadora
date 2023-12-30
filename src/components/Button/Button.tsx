import * as S from './styles';

export const Button = ({
  onClick,
  styles,
  children
}: {
  children: React.ReactNode;
  onClick?: () => void;
  styles?: string;
}) => {
  return (
    <S.Button onClick={onClick} className={styles}>
      {children}
    </S.Button>
  );
};
