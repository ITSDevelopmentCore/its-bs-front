import * as React from 'react';

// MUI Components
import { ListItemIcon, ListItemText, ListItemButton, ListItem, Divider, List, Toolbar, Drawer, Box, Button, Switch } from '@mui/material';

// Icons
import { SiRobotframework, SiOpslevel } from 'react-icons/si';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiExit } from 'react-icons/bi';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { WINDOW_TAG_BILLING, WINDOW_TAG_USER, WINDOW_TAG_USER_BOTS, WINDOW_TAG_EDITOR } from "../../lib/navigation/Navigator";

const drawerWidth = 240;

export default function SideMenu(props) {

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar sx={{
        height: "20vh"
      }} />

      <Box sx={{ overflow: 'auto' }}>

        <List>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => props.menuItemClickListener(WINDOW_TAG_USER_BOTS)}
              disableRipple>

              <ListItemIcon>
                <SiRobotframework color={"#fff"} />
              </ListItemIcon>

              <ListItemText primary={"Мои проекты"} />

            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              disableRipple>

              <ListItemIcon>
                <SiOpslevel />
              </ListItemIcon>

              <ListItemText primary={"Шаблоны"} />

            </ListItemButton>
          </ListItem>

        </List>

        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => props.menuItemClickListener(WINDOW_TAG_BILLING)}
              disableRipple>

              <ListItemIcon>
                <AiFillDollarCircle />
              </ListItemIcon>

              <ListItemText primary={"Биллинг"} />

            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>

            <ListItemButton
              disableRipple
              onClick={() => props.menuItemClickListener(WINDOW_TAG_USER)}>

              <ListItemIcon>
                <MdOutlineAccountCircle />
              </ListItemIcon>

              <ListItemText primary={"Аккаунт"} />

            </ListItemButton>
          </ListItem>
        </List>

      </Box>
      <Box className='flex flex-col-reverse flex-auto'>

        <Button sx={{
          margin: "10px",
          "margin-bottom": "25px"
        }} startIcon={<BiExit />} variant={"outlined"}>Выйти</Button>

        <div className="bg-white py-5 px-10 flex flex-row space-x-4 justify-center items-center
                                        dark:bg-neutral-800 dark:border-neutral-800">
          <BsFillSunFill className="text-amber-500 w-6 h-6" />
          <Switch />
          <BsFillMoonFill className="text-yellow-300 w-6 h-6" />
        </div>

      </Box>
    </Drawer>
  )
}