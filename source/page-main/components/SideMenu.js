import * as React from 'react';

// MUI Components
import { Divider, Drawer, Box, Button, Switch } from '@mui/material';

// Icons
import { SiRobotframework, SiOpslevel } from 'react-icons/si';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BiExit } from 'react-icons/bi';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { WINDOW_TAG_BILLING, WINDOW_TAG_USER, WINDOW_TAG_USER_BOTS, WINDOW_TAG_EDITOR } from "./Navigator";


const drawerWidth = 240;

export default function SideMenu(props) {

  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        ['& .MuiPaper-root']: {
          width: drawerWidth,
        },
      }}>

      <Button
        sx={{ height: 50, justifyContent: 'flex-start', marginTop: '10vh', fontWeight: 700  }}
        onClick={() => props.menuItemClickListener(WINDOW_TAG_USER_BOTS)}>

        <SiRobotframework className='mx-4 text-[32px]' />
        Мои проекты
      </Button>

      <Button
        sx={{ height: 50, justifyContent: 'flex-start', fontWeight: 700}}
        onClick={() => props.menuItemClickListener(WINDOW_TAG_USER)}>

        <SiOpslevel className='mx-4 text-[32px]' />
        Шаблоны
      </Button>

      <Divider />

      <Button
        sx={{ height: 50, justifyContent: 'flex-start', marginTop: '10vh', fontWeight: 700 }}
        onClick={() => props.menuItemClickListener(WINDOW_TAG_BILLING)}>

        <AiFillDollarCircle className='mx-4 text-[32px]'/>
        Биллинг
      </Button>

      <Button
        sx={{ height: 50, justifyContent: 'flex-start', fontWeight: 700}}
        onClick={() => props.menuItemClickListener(WINDOW_TAG_EDITOR)}>

        <MdOutlineAccountCircle className='mx-4 text-[32px]'/>
        Аккаунт
      </Button>

      <Box className='flex flex-col-reverse flex-auto'>

        <Button 
        sx={{ margin: '10px 10px 25px 10px', fontWeight: 700 }} 
        startIcon={<BiExit />} 
        variant={'outlined'}>
          Выйти
        </Button>

        <Box className="bg-white py-5 px-10 flex flex-row space-x-4 justify-center items-center dark:bg-neutral-800">
          <BsFillSunFill className="text-yellow-300 text-xl" />
          <Switch onChange={props.changeThemeListener} />
          <BsFillMoonFill className="text-yellow-300 text-xl" />
        </Box>

      </Box>
    </Drawer>
  )
}