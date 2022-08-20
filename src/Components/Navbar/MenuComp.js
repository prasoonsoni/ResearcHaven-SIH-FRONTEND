import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";

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
      <MenuList>
        <MenuItem icon={<AddIcon />}>
          Create Document
        </MenuItem>
        <MenuItem icon={<InsertLinkIcon />}>
          Verify Documents
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuComp;
