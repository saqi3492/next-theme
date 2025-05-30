"use client";
import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import {
  COLLAPSED_SIDEBAR_WIDTH,
  HEADER_HEIGHT,
  SIDEBAR_WIDTH,
} from "@/utils/constants";
import { useSelector } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarCompact = useSelector(
    (state: any) => state.ThemeOptions.sidebarCompact
  );
  return (
    <>
      <Sidebar />

      <Header />
      <Box
        sx={{
          p: 2,
          mt: `${HEADER_HEIGHT}px`,
          ml: sidebarCompact
            ? `${COLLAPSED_SIDEBAR_WIDTH}px`
            : `${SIDEBAR_WIDTH}px`,
          transition: "all .2s ease",
        }}
      >
        {children}
      </Box>
    </>
  );
}
