import React from "react";
import { SkeletonCircle, Box } from "@chakra-ui/react";
function UserSkeleton() {
  return (
    <Box boxShadow="lg">
      <SkeletonCircle size="12"/>
    </Box>
  );
}

export default UserSkeleton;
