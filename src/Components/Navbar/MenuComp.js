import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
function MenuComp() {
  const navigate = useNavigate();
  const fetchdata = async () => {
    let response = await fetch(
      "https://webcrawlers-sih.vercel.app/api/researchpaper/create",
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
      // setId(data["data"].id)
      // console.log(data["data"].id)
      // console.log(id);
      let path = `/dashboard/edit/${data.data.id}`;
      navigate(path);
    } else {
      console.log(data.message);
    }
  };
  return (
    <Menu>
      <MenuButton
        as={MenuIcon}
        aria-label="Options"
        icon={<MenuIcon _hover={{ cursor: "pointer" }} />}
        variant="outline"
      />
      <MenuList bg="#171717">
        <MenuItem
          onClick={fetchdata}
          _active={{ background: "transparent" }}
          _focus={{ background: "teal" }}
          icon={<AddIcon />}
        >
          Create Document
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuComp;
