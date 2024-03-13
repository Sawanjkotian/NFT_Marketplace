import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { NFTComponent } from "./NTF";
import React from "react";
import Link from "next/link";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
};

export const NFTGrid = ({
  isLoading,
  data,
  overrideOnclickBehavior,
  emptyText = "No NFTs found",
}: Props) => {
  return (
    <SimpleGrid column={4} spacing={6} w={"100%"} padding={2.5} my={5}>
      {isLoading ? (
        [...Array(20)].map((_, index) => (
          <Skeleton key={index} height={"312px"} width={"100%"} />
        ))
      ) : data && data.length > 0 ? (
        data.map((nft) =>
          !overrideOnclickBehavior ? (
            <Link
              href={`/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`}
              key={nft.metadata.id}
            >
              <NFTComponent nft={nft} />
            </Link>
          ) : (
            <div
              key={nft.metadata.id}
              onClick={() => overrideOnclickBehavior(nft)}
            >
              <NFTComponent nft={nft} />
            </div>
          )
        )
      ) : (
        <Text>{emptyText}</Text>
      )}
    </SimpleGrid>
  );
};
