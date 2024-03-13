import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import NextLink from "next/link";

export const NavBar = () => {
  const address = useAddress();
  return (
    <Box m={"auto"} py={"10px"} px={"40px"}>
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Link href="/">
          <Heading>MarketPlace</Heading>
        </Link>
        <Flex gap={"50px"} direction={"row"} alignItems={"center"}>
          <Link href="/buy">Buy</Link>
          <Link href="/sell">Sell</Link>
        </Flex>
        <ConnectWallet />
        {address && (
          <Link href={`/profile/${address}`}>
            <Avatar src="https://bit.ly/broken-link" ml={"20px"}></Avatar>
          </Link>
        )}
      </Flex>
    </Box>
  );
};
