import React, { useCallback, useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavItemButton, BulletIcon, BadgeValue, Span } from './SidebarComponents';

const NavExpandRoot = styled(Box)(() => ({
  '& .subMenu': {
    padding: 0,
  },
  '& .expansion-panel': {
    '& .expansion-panel': {
      paddingLeft: 8,
    },
    overflow: 'hidden',
    transition: 'max-height 0.3s cubic-bezier(0, 0, 0.2, 1)',
  },
}));

interface ChevronIconStyledProps {
  collapsed?: boolean;
  compact?: boolean;
}

const ChevronIconStyled = styled(ChevronRightIcon, {
  shouldForwardProp: prop => prop !== 'collapsed' && prop !== 'compact',
})<ChevronIconStyledProps>(({ collapsed, compact }) => ({
  fontSize: 18,
  transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
  transform: collapsed ? 'rotate(90deg)' : 'rotate(0deg)',
  ...(compact && {
    opacity: 0,
    width: 0,
  }),
}));

interface ItemTextProps {
  compact?: boolean;
  active?: number;
}

const ItemText = styled(Span)<ItemTextProps>(({ theme, compact, active }) => ({
  whiteSpace: 'nowrap',
  paddingLeft: '0.8rem',
  fontSize: '13px',
  fontWeight: 500,
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  verticalAlign: 'middle',
  transition: 'all 0.15s ease',
  ...(compact && {
    opacity: 0,
    width: 0,
    paddingLeft: 0,
  }),
}));

interface SidebarAccordionProps {
  item: {
    name: string;
    icon?: React.ElementType;
    iconText?: string;
    badge?: {
      value: string | number;
    };
    children: Array<{
      path: string;
      name: string;
      icon?: React.ElementType;
      iconText?: string;
      badge?: {
        value: string | number;
      };
    }>;
  };
  children: React.ReactNode;
  sidebarCompact?: boolean;
}

const SidebarAccordion: React.FC<SidebarAccordionProps> = props => {
  const { item, children, sidebarCompact } = props;
  const elementRef = useRef<HTMLDivElement | null>(null);
  const componentHeight = useRef(0);
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [hasActive, setHasActive] = useState(false);
  const [height, setHeight] = useState(0);

  const { name, icon, iconText, badge } = item;

  const handleClick = () => {
    componentHeight.current = 0;
    if (elementRef.current) {
      calcaulateHeight(elementRef.current);
      setHeight(componentHeight.current);
    }
    setCollapsed(!collapsed);
  };

  interface CalcaulateHeightNode extends HTMLElement {
    name?: string;
    children: HTMLCollection;
    scrollHeight: number;
  }

  const calcaulateHeight = useCallback((node: CalcaulateHeightNode) => {
    if (node.name !== 'child') {
      for (let child of Array.from(node.children)) {
        calcaulateHeight(child as CalcaulateHeightNode);
      }
    }

    if (node.name === 'child') componentHeight.current += node.scrollHeight;
    else componentHeight.current += 44; //here 44 is node height

    return;
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;
    calcaulateHeight(elementRef.current); // OPEN DROPDOWN IF CHILD IS ACTIVE
    setHeight(componentHeight.current);

    for (let child of item.children) {
      if (child.path === pathname) {
        setCollapsed(true);
        setHasActive(true);
      }
    }

    return () => {
      setHasActive(false);
    };
  }, [calcaulateHeight, pathname, item.children]);

  return (
    <NavExpandRoot className="subMenu">
      <NavItemButton sx={{ padding: '0 12px', justifyContent: 'space-between' }} onClick={handleClick} active={hasActive}>
        <Box pl="7px" display="flex" alignItems="center">
          {icon &&
            (() => {
              const IconComponent = icon;
              return (
                <IconComponent
                  sx={{
                    fontSize: 18,
                    color: hasActive ? 'primary.main' : 'text.secondary',
                    mr: '4px',
                  }}
                />
              );
            })()}
          {iconText && (
            <BulletIcon
              sx={{
                marginLeft: '8px',
                marginRight: '6px',
                width: 6,
                height: 6,
              }}
              active={hasActive}
            />
          )}
          <ItemText compact={sidebarCompact} active={hasActive ? 1 : 0}>
            {name}
          </ItemText>
        </Box>

        <ChevronIconStyled color="disabled" compact={!!sidebarCompact} collapsed={!!collapsed} className="accordionArrow" />
      </NavItemButton>

      <div
        ref={elementRef}
        className="expansion-panel"
        style={{
          maxHeight: !collapsed || sidebarCompact ? '0px' : height + 'px',
        }}
      >
        {children}
      </div>
    </NavExpandRoot>
  );
};

export default SidebarAccordion;
