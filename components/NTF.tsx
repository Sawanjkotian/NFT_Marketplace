import React from "react";
import { NFT } from "@thirdweb-dev/sdk";
import {
  MARKETPLACE_ADDRESSES,
  NFT_COLLECTION_ADDRESS,
} from "../const/addresses";
import {
  ThirdwebNftMedia,
  useContract,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";

type Props = {
  nft: NFT;
};

export const NFTComponent = ({ nft }: Props) => {
  const { contract: marketplace, isLoading: loadingMarketplace } = useContract(
    MARKETPLACE_ADDRESSES,
    "marketplace-v3"
  );
  const { data: directListing, isLoading: loadingDirectListing } =
    useValidDirectListings(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS,
      tokenId: nft.metadata.id,
    });
  return (
    <Flex
      direction={"column"}
      backgroundColor={"#EEE"}
      justifyContent={"center"}
      padding={"2.5"}
      borderRadius={"6px"}
      borderColor={"lightgray"}
      borderWidth={1}
    >
      <Box borderRadius={"4px"} overflow={"hidden"}>
        <ThirdwebNftMedia
          metadata={nft.metadata}
          height={"100%"}
          width={"100%"}
        />
      </Box>
      <Text fontSize={"small"} color={"darkgray"}>
        Token ID #{nft.metadata.id}
      </Text>
      <Text fontWeight={"bold"}>{nft.metadata.name}</Text>
      <Box>
        { loadingMarketplace || loadingDirectListing ? (
            <Skeleton></Skeleton>
        ): directListing && directListing[0] ?(
            <Box>
                <Flex direction={"column"}>
                    <Text fontSize={"small"}>Price</Text>
                    <Text fontSize={"small"}>{`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}</Text>
                </Flex>
            </Box>
        ):(
            <Box>
                <Flex direction={"column"}>
                    <Text fontSize={"small"}>Price</Text>
                    <Text fontSize={"small"}>Not listed</Text>
                </Flex>
            </Box>
        )}
      </Box>
    </Flex>
  );
};
