import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import { Outlet, useNavigate } from "react-router-dom";
function Buttons() {
    // for creating a document
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const fetchData = async () => {
    setIsCreating(true);
    let response = await fetch(
      "https://webcrawlers-sih.vercel.app/api/proposal/create",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
      }
    );
    let data = await response.json();
    if (data.success) {
      setIsCreating(false);
      let path = `/dashboard/edit/${data.data.id}`;
      navigate(path);
    } else {
      console.log(data.message);
    }
  };

//   for uploading the document

  return (<>
    <Flex justify="space-between" align="center">
    <ButtonGroup mb={4} mt={4}>
      <Button
      leftIcon={<AddIcon />}
        onClick={fetchData}
        bg="teal"
        _hover={{ bg: "blue.800" }}
        isLoading={isCreating}
        loadingText="Creating Document"
        size="sm"
      >
        
        CREATE A NEW DRAFT
      </Button>
      <Button leftIcon = {<UploadIcon />} size="sm">
        UPLOAD YOUR PROPOSAL
      </Button>
    </ButtonGroup>
    </Flex>
    <Outlet/>
    </>
  );
}

export default Buttons;
