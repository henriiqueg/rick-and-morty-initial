import Link from 'next/link';
import { Container, SimpleGrid, Center } from '@chakra-ui/react';

import Header from 'components/Header';
import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';

export default function Home({ data }) {
  return (
    <>
      <Header />
      <Container maxW="container.lg" p={7}>
        <Center>
          <SimpleGrid
            columns={[1, 1, 2, 3]}
            spacing={[2, 3, 5]}
            mt={10}
            mb={10}
          >
            {data.results.map((character) => (
              <CharacterCard name={character.name} image={character.image} />
            ))}
          </SimpleGrid>
        </Center>

        <Link as="/[character]/[name]" href="/rick/rick-doidao">
          Ir para pagina de rick
        </Link>
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
