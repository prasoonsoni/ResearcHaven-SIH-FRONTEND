import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
function MenuComp() {
  const navigate = useNavigate()
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
      let path = `/dashboard/edit/${data.data.id}`
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
      <MenuList bg="#171717" >
          <MenuItem
          onClick={fetchdata}
            _active={{ background: "transparent" }}
            _focus={{ background: "teal" }}
            icon={<AddIcon />}
          >
            Create Document
          </MenuItem>
        <Link to={"/dashboard/manage"}>
          <MenuItem
            _active={{ background: "transparent" }}
            _focus={{ background: "teal" }}
            icon={<InsertLinkIcon />}
          >
            Manage Your Documents
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}

export default MenuComp;
