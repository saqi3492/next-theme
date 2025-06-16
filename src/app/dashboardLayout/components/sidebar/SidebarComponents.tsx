import { styled, alpha } from '@mui/material/styles';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import { Box, BoxProps } from '@mui/material';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from '@/store/store';
import React, { ReactNode } from 'react';

interface NavItemButtonProps extends ButtonBaseProps {
  active?: boolean;
  sx?: any;
  children: ReactNode;
}

const StyledNavItemButton = styled(ButtonBase, {
  shouldForwardProp: prop => prop !== 'active',
})<{
  active?: boolean;
}>(({ theme, active }) => ({
  height: 44,
  width: '100%',
  padding: '0 18px',
  borderRadius: 8,
  marginBottom: 4,
  justifyContent: 'flex-start',
  transition: 'all 0.15s ease',
  backgroundColor: active ? alpha(theme.palette.primary.main, 0.06) : 'transparent',
  color: active ? theme.palette.primary.main : 'inherit',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const NavItemButton = ({ active, sx, children, ...props }: NavItemButtonProps) => {
  return (
    <StyledNavItemButton active={active} sx={{ ...sx }} {...props}>
      {children}
    </StyledNavItemButton>
  );
};

interface BulletIconProps extends BoxProps {
  active?: boolean;
}

const StyledBulletIcon = styled(Box, {
  shouldForwardProp: prop => prop !== 'active',
})<{
  active?: boolean;
}>(({ theme, active }) => ({
  width: 4,
  height: 4,
  marginLeft: '10px',
  marginRight: '8px',
  overflow: 'hidden',
  borderRadius: '50%',
  background: active ? theme.palette.primary.main : theme.palette.text.disabled,
  boxShadow: active ? `0px 0px 0px 3px ${theme.palette.primary.main}` : 'none',
}));

export const BulletIcon = ({ active, sx, ...props }: BulletIconProps) => {
  return <StyledBulletIcon active={active} sx={{ ...sx }} {...props} />;
};

interface BadgeValueProps extends BoxProps {
  compact?: boolean;
}

const StyledBadgeValue = styled(Box, {
  shouldForwardProp: prop => prop !== 'sidebarCompact' && prop !== 'compact',
})<{
  compact?: boolean;
  sidebarCompact?: boolean;
}>(({ theme, compact, sidebarCompact }) => ({
  fontSize: '12px',
  fontWeight: 500,
  color: 'white',
  padding: '1px 6px',
  overflow: 'hidden',
  borderRadius: '300px',
  backgroundColor: theme.palette.primary.main,
  transition: 'all 0.15s ease',
  display: compact ? 'none' : 'unset',
  ...(sidebarCompact && {
    opacity: 0,
    width: 0,
  }),
}));

export const BadgeValue = ({ compact, sx, ...props }: BadgeValueProps) => {
  const sidebarCompact = useSelector((state: RootState) => (state as any).ThemeOptions?.sidebarCompact);
  return <StyledBadgeValue compact={compact ? true : undefined} sidebarCompact={sidebarCompact} sx={{ ...sx }} {...props} />;
};

interface ParagraphProps extends BoxProps {
  ellipsis?: boolean;
  children: ReactNode;
  className?: string;
}

const StyledBox = styled(Box)<{ ellipsis?: boolean }>(({ ellipsis }) => ({
  ...(ellipsis && {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }),
}));

export const Paragraph = (props: ParagraphProps) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={14}
      component="p"
      fontWeight={500}
      ellipsis={ellipsis ? true : undefined}
      className={clsx({
        [className || '']: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};

export const Span = (props: ParagraphProps) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={14}
      component="span"
      ellipsis={ellipsis ? true : undefined}
      className={clsx({
        [className || '']: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
