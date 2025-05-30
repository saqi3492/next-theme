import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import MultiLevelMenu from "./MultiLevelMenu";
import { useSelector } from "react-redux";
import {
  COLLAPSED_SIDEBAR_WIDTH,
  SIDEBAR_WIDTH,
} from "../../../../utils/constants";

const DesktopSidebar: React.FC = () => {
  const theme = useTheme();
  const [onHover, setOnHover] = useState<boolean>(false);
  const sidebarCompact = useSelector(
    (state: any) => state.ThemeOptions.sidebarCompact
  );

  return (
    <Box
      width={sidebarCompact ? COLLAPSED_SIDEBAR_WIDTH : SIDEBAR_WIDTH}
      zIndex={theme.zIndex.drawer}
      position="fixed"
      height="100%"
      boxShadow={1}
      sx={{
        backgroundColor: theme.palette.background.paper,

        transition: "all .2s ease",
        "&:hover": sidebarCompact && { width: SIDEBAR_WIDTH },
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <MultiLevelMenu sidebarCompact={sidebarCompact && !onHover} />
    </Box>
  );
};

export default DesktopSidebar;
