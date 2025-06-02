import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { HEADER_HEIGHT } from '@/utils/constants';
import { setSidebarCompact } from '../../../../../store/reducers/themeOptionsSlice';
import { RootState } from '../../../../../store/store';

const HeaderLogo: React.FC = () => {
  const dispatch = useDispatch();
  const sidebarCompact = useSelector((state: RootState) => state.ThemeOptions.sidebarCompact);

  return (
    <Stack direction="row" alignItems="center" spacing={3} pl={'10px'} height={HEADER_HEIGHT}>
      <Image src={Logo} alt="logo" width={130} height={40} priority />
      <IconButton onClick={() => dispatch(setSidebarCompact())} sx={{ color: 'black' }}>
        {sidebarCompact ? <MenuIcon /> : <MenuOpenIcon />}
      </IconButton>
    </Stack>
  );
};

export default HeaderLogo;
