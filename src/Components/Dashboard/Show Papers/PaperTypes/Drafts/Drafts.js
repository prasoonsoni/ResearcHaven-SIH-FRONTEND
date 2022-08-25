import React from "react";
import { Divider, Flex, Skeleton, Stack, Text } from "@chakra-ui/react";

import { useFetch } from "../../../../Hooks/useFetch";
import DraftItem from "./DraftItem";

function Drafts() {
  let url = "https://webcrawlers-sih.vercel.app/api/proposal/draft";
  const { data, isLoading, error } = useFetch(url, "GET");
  if (error) {
    alert(error);
  }
  console.log(isLoading);
  console.log(data);
  return (
    <>
      <Text fontSize="2xl">Drafts</Text>
      <Divider mb={4} />
      <Flex direction="column" gap={4} w="100%">
        {/* fetched drafts paper */}
        <Flex wrap="wrap">
          {isLoading && (
            <Stack w="100%">
              <Skeleton h="60px" />
              <Skeleton h="60px" />
              <Skeleton h="60px" />
            </Stack>
          )}
          {!isLoading &&
            data &&
            data.data.map((paper) => {
              return <DraftItem key={paper._id} paper={paper} />;})}
        </Flex>
      </Flex>
    </>
  );
}

export default Drafts;
