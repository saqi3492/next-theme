import React, { memo } from "react";
import { Stack } from "@mui/material";
import UserMenu from "./UserMenu";
import HeaderLogo from "./HeaderLogo";

const HeaderContent: React.FC = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <HeaderLogo />
      <UserMenu />
    </Stack>
  );
};

export default memo(HeaderContent);
