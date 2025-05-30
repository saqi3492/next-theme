import React from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter, usePathname } from "next/navigation";
import { navItems } from "./navItems";
import SidebarAccordion from "./SidebarAccordion";
import LogoutBox from "./LogoutBox";
import {
  NavItemButton,
  BulletIcon,
  BadgeValue,
  Paragraph,
  Span,
} from "./SidebarComponents";
import "simplebar-react/dist/simplebar.min.css";
import { SxProps, Theme } from "@mui/material";
import SimpleBar from "simplebar-react";
import { SIDEBAR_TOP_HEADER_AREA } from "@/utils/constants";

interface NavItem {
  type?: string;
  label?: string;
  name?: string; // Make name optional to match imported NavItem
  path?: string;
  icon?: React.ElementType;
  badge?: { value: string };
  children?: NavItem[];
}

interface MultiLevelMenuProps {
  sidebarCompact?: boolean;
}

const ListLabel = styled(Paragraph)<{ compact?: number }>(
  ({ theme, compact }) => ({
    fontWeight: 700,
    fontSize: "12px",
    marginTop: "20px",
    marginLeft: "15px",
    marginBottom: "10px",
    textTransform: "uppercase",
    transition: "all 0.15s ease",
    color: theme.palette.text.secondary,
    ...(compact && {
      opacity: 0,
      width: 0,
    }),
  })
);

export const StyledText = styled(Span)<{ compact?: number; active?: number }>(
  ({ theme, compact, active }) => ({
    whiteSpace: "nowrap",
    paddingLeft: "0.8rem",
    transition: "all 0.15s ease",
    fontSize: "13px",
    fontWeight: 500,
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
    ...(compact && {
      opacity: 0,
      width: 0,
    }),
  })
);

export const iconStyle = (active: number): SxProps<Theme> => ({
  fontSize: 18,
  marginRight: "4px",
  color: active ? "primary.main" : "text.secondary",
});

const MultiLevelMenu: React.FC<MultiLevelMenuProps> = ({
  sidebarCompact = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const activeRoute = (path?: string) => (pathname === path ? 1 : 0);

  const handleNavigation = (path?: string) => {
    if (path) router.push(path);
  };

  const COMPACT = sidebarCompact ? 1 : 0;

  const renderLevels = (data: NavItem[]) => {
    return data.map((item, index) => {
      if (item.type === "label")
        return (
          <ListLabel key={index} compact={COMPACT}>
            {item.label}
          </ListLabel>
        );

      if (item.children) {
        // Ensure 'name' is always defined for SidebarAccordion
        if (!item.name) return null;
        // Filter children to ensure 'name' and 'path' are defined
        const validChildren =
          item.children
            ?.filter(
              (child) =>
                typeof child.name === "string" && typeof child.path === "string"
            )
            .map((child) => ({
              ...child,
              name: child.name as string,
              path: child.path as string,
            })) ?? [];

        return (
          <SidebarAccordion
            key={index}
            item={{
              ...item,
              name: item.name!,
              children: validChildren,
            }}
            sidebarCompact={!!COMPACT}
          >
            {renderLevels(validChildren)}
          </SidebarAccordion>
        );
      } else {
        return (
          <Box key={index}>
            <NavItemButton
              key={item.name}
              className="navItem"
              active={!!activeRoute(item.path)}
              onClick={() => handleNavigation(item.path)}
            >
              {item?.icon ? (
                <item.icon sx={iconStyle(activeRoute(item.path))} />
              ) : (
                <BulletIcon active={!!activeRoute(item.path)} />
              )}

              <StyledText compact={COMPACT} active={activeRoute(item.path)}>
                {item.name}
              </StyledText>

              <Box mx="auto" />

              {item.badge && (
                <BadgeValue compact={!!COMPACT}>{item.badge.value}</BadgeValue>
              )}
            </NavItemButton>
          </Box>
        );
      }
    });
  };

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      height={`calc(100vh - ${SIDEBAR_TOP_HEADER_AREA}px)`}
    >
      <SimpleBar style={{ maxHeight: "100%", overflowX: "hidden" }}>
        <Box sx={{ p: "0 5px" }}>{renderLevels(navItems)}</Box>
      </SimpleBar>

      <LogoutBox isCompact={!!COMPACT} />
    </Stack>
  );
};

export default MultiLevelMenu;
