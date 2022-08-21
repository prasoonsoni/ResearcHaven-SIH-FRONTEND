import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import {Link, useLocation} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
function MenuComp() {
  const location = useLocation();
  return (
    <Menu>
      <MenuButton
        as={MenuIcon}
        aria-label="Options"
        icon={<MenuIcon _hover={{cursor:'pointer'}} />}
        variant="outline"
      />
      <MenuList>
        <Link to={"/dashboard/create"}><MenuItem icon={<AddIcon />}>
          Create Document
        </MenuItem></Link>
        <Link to={"/dashboard/verify"}>
        <MenuItem icon={<InsertLinkIcon />}>
          Verify Documents
        </MenuItem></Link>
      </MenuList>
    </Menu>
  );
}

export default MenuComp;
