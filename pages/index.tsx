import { NextPage } from "next";
import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () =>{
    router.push('/buy')
  }
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading>MarketPlace</Heading>
          <Button onClick={handleClick}>
            Shop NFT
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
