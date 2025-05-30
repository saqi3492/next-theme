import React from "react";
import MultiLevelMenu from "./MultiLevelMenu";
import { useDispatch, useSelector } from "react-redux";
import { Box, Drawer, useTheme } from "@mui/material";
import { setSidebarCompact } from "../../../../../store/reducers/themeOptionsSlice";
import { SIDEBAR_WIDTH } from "@/utils/constants";
import HeaderLogo from "../header/HeaderLogo";

const MobileSidebar: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const sidebarCompact = useSelector(
    (state: any) => state.ThemeOptions.sidebarCompact
  );

  const closeSidebar = () => {
    dispatch(setSidebarCompact());
  };

  return (
    <Drawer
      anchor="left"
      open={!sidebarCompact}
      onClose={closeSidebar}
      PaperProps={{ sx: { width: SIDEBAR_WIDTH } }}
    >
      <Box
        height="100%"
        width="inherit"
        sx={{
          position: "fixed",
          overflow: "hidden",
          zIndex: theme.zIndex.drawer + 3,
        }}
      >
        <HeaderLogo />
        <MultiLevelMenu />
      </Box>
    </Drawer>
  );
};

export default MobileSidebar;
