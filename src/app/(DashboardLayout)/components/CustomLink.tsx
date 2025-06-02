import { ReactNode } from 'react';
import { useTheme, SxProps, Typography } from '@mui/material';
import Link, { LinkProps } from 'next/link';

interface CustomLinkProps extends Omit<LinkProps, 'href'> {
  href: string;
  children: ReactNode;
  sx?: SxProps;
}

const CustomLink = ({ href, children, sx, ...props }: CustomLinkProps) => {
  const theme = useTheme();

  return (
    <Typography
      component={Link}
      href={href}
      sx={{
        fontSize: '15px',
        textDecoration: 'none',
        color: theme.palette.primary.main,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default CustomLink;
