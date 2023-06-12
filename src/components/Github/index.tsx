import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoLogoGithub } from 'react-icons/io5';
import { Container, Description, Footer, Icon, Link, Text } from './styles';

const Github = ({ showDescription }: { showDescription: boolean }) => {
  return (
    <Link
      href="https://github.com/luizchaaves"
      target="_blank"
      rel="noreferrer"
    >
      <Container>
        <Icon>
          <IoLogoGithub />
        </Icon>
        {showDescription && (
          <Description>
            <Text>
              Explore meu perfil no GitHub para descobrir mais sobre meus
              projetos e contribuições. Não deixe de conferir meu trabalho,
              visite meu GitHub e mergulhe no mundo do desenvolvimento!
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

export default Github;
