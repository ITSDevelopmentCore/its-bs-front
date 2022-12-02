import * as React from 'react';

// MUI Components
import { Divider, Toolbar, Drawer, Box, Button, Switch } from '@mui/material';

// Icons
import { SiRobotframework, SiOpslevel } from 'react-icons/si';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiExit } from 'react-icons/bi';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { WINDOW_TAG_BILLING, WINDOW_TAG_USER, WINDOW_TAG_USER_BOTS } from "../../lib/navigation/Navigator";


const drawerWidth = 240;

export default function SideMenu(props) {

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiPaper-root`]: {
          width: drawerWidth, 
          boxSizing: 'border-box' 
        },

      }}
    >
      <Toolbar sx={{
        height: "10vh"
      }} />

      <Button
        sx={{ height: 50 }}
        onClick={() => props.menuItemClickListener(WINDOW_TAG_USER_BOTS)}
        style={{ justifyContent: "flex-start" }}>

        <div className="font-blue-500 mx-4">
          <SiRobotframework size={32}  />
        </div>
        <span className='text-sm'>Мои проекты</span>

      </Button>
      <Button
        sx={{ height: 50 }}
        onClick={() => props.menuItemClickListener(WINDOW_TAG_USER)}
        style={{ justifyContent: "flex-start" }}>

        <div className="font-blue-500 mx-4">
          <SiOpslevel size={32} />
        </div>
        <span className='text-sm'>Шаблоны</span>

      </Button>
      <Divider />
      <Toolbar sx={{
        height: "10vh"
      }} />
      <Button
        sx={{ height: 50 }}
        onClick={() => props.menuItemClickListener(WINDOW_TAG_BILLING)}
        style={{ justifyContent: "flex-start" }}>

        <div className="font-blue-500 mx-4">
          <AiFillDollarCircle size={32} />
        </div>
        <span className='text-sm'>Биллинг</span>

      </Button>

      <Button
        sx={{ height: 50 }}
        onClick={() => props.menuItemClickListener(WINDOW_TAG_USER)}
        style={{ justifyContent: "flex-start" }}>

        <div className="font-blue-500 mx-4">
          <MdOutlineAccountCircle size={32} />
        </div>
        <span className='text-sm'>Аккаунт</span>

      </Button>

      <Box className='flex flex-col-reverse flex-auto'>

        <Button sx={{
          margin: "10px",
          "margin-bottom": "25px"
        }} startIcon={<BiExit />} variant={"outlined"}>Выйти</Button>

        <div className="bg-white py-5 px-10 flex flex-row space-x-4 justify-center items-center
                                        dark:bg-neutral-800 dark:border-neutral-800">
          <BsFillSunFill className="text-amber-500 w-6 h-6" />
          <Switch onChange={props.changeThemeListener}/>
          <BsFillMoonFill className="text-yellow-300 w-6 h-6" />
        </div>

      </Box>
    </Drawer>
  )
}