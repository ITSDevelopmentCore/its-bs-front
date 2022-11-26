import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import { Button } from '@mui/material';

// Icons, used in component
import { SiRobotframework, SiOpslevel } from 'react-icons/si';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiExit } from 'react-icons/bi';

const drawerWidth = 240;

// React-Icons
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

// MUI
import Switch from '@mui/material/Switch'
export default function SideMenu() {

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
            <ListItemButton disableRipple>
              <ListItemIcon>
                <SiRobotframework color={"#fff"}/>
              </ListItemIcon>
              <ListItemText primary={"Мои проекты"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton disableRipple>
              <ListItemIcon><SiOpslevel /></ListItemIcon>
              <ListItemText primary={"Шаблоны"} />
            </ListItemButton>
          </ListItem>

        </List>

        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton disableRipple>
              <ListItemIcon><AiFillDollarCircle /></ListItemIcon>
              <ListItemText primary={"Биллинг"} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton disableRipple>
              <ListItemIcon><MdOutlineAccountCircle /></ListItemIcon>
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