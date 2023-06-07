import { Container } from './styles';
import { MdOutlineNightlightRound, MdSunny } from 'react-icons/md';
import { useAppSelector } from '../../hooks/hooks';
import { AppDispatch, RootState } from '../../store/configureStore';
import { switchTheme } from '../../store/theme';
import { useDispatch } from 'react-redux';

const Theme = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useAppSelector((state: RootState) => state.theme);

  function handleThemeClick() {
    if (theme === 'light') dispatch<any>(switchTheme('dark'));
    else dispatch<any>(switchTheme('light'));
  }

  return (
    <Container onClick={handleThemeClick}>
      {theme === 'light' ? <MdOutlineNightlightRound /> : <MdSunny />}
    </Container>
  );
};

export default Theme;
