import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
function MenuComp() {
  return (
    <Menu>
      <MenuButton
        as={MenuIcon}
        aria-label="Options"
        icon={<MenuIcon _hover={{cursor:'pointer'}} />}
        variant="outline"
      />
      <MenuList bg="#171717">
        <Link to={"/dashboard/create"}><MenuItem _active={{background:"transparent"}} _focus={{background:"teal"}} icon={<AddIcon/>}>
          Create Document
        </MenuItem></Link>
        <Link to={"/dashboard/verify"}>
        <MenuItem _active={{background:"transparent"}} _focus={{background:"teal"}} icon={<InsertLinkIcon />}>
          Verify Documents
        </MenuItem></Link>
      </MenuList>
    </Menu>
  );
}

export default MenuComp;
