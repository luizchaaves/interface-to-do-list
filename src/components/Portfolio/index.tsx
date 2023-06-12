import { IoLibrary } from 'react-icons/io5';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Container, Description, Footer, Icon, Link, Text } from './styles';

const Portfolio = ({ showDescription }: { showDescription: boolean }) => {
  return (
    <Link href="https://devluiz.netlify.app/" target="_blank" rel="noreferrer">
      <Container>
        <Icon>
          <IoLibrary />
        </Icon>
        {showDescription && (
          <Description>
            <Text>
              Visite meu portfólio para descobrir mais sobre mim, meu trabalho e
              projetos. Não perca a oportunidade de explorar meu portfólio e
              entrar em contato!
            </Text>
            <Footer>
              Acessar <AiOutlineArrowRight />
            </Footer>
          </Description>
        )}
      </Container>
    </Link>
  );
};

export default Portfolio;
