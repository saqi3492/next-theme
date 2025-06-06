import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TableChartIcon from '@mui/icons-material/TableChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatIcon from '@mui/icons-material/Chat';
import LockIcon from '@mui/icons-material/Lock';
import { SvgIconComponent } from '@mui/icons-material';

export interface NavItem {
  type?: 'label';
  label?: string;
  name?: string;
  path?: string;
  icon?: SvgIconComponent;
  iconText?: string;
  badge?: { value: string };
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    type: 'label',
    label: 'Dashboard',
  },
  {
    name: 'Sessions',
    path: '/sessions',
    icon: DashboardIcon,
  },
  {
    type: 'label',
    label: 'Management',
  },
  {
    name: 'Profiles',
    icon: PeopleIcon,
    children: [
      {
        name: 'Profile 1',
        path: '/dashboard/profile',
      },
      {
        name: 'Profile 2',
        path: '/dashboard/profile-v2',
      },
    ],
  },
  {
    name: 'Accounts',
    icon: LockIcon,
    children: [
      {
        name: 'Account 1',
        path: '/dashboard/account',
      },
      {
        name: 'Account 2',
        path: '/dashboard/account-v2',
      },
    ],
  },
  {
    name: 'User & Contact',
    icon: PeopleIcon,
    children: [
      {
        name: 'Contact List',
        path: '/dashboard/contact-list',
      },
      {
        name: 'Contact Grid',
        path: '/dashboard/contact-grid',
      },
    ],
  },
  {
    name: 'Projects',
    icon: AssignmentIcon,
    children: [
      {
        name: 'Project List 1',
        path: '/dashboard/project-v1',
      },
      {
        name: 'Project List 2',
        path: '/dashboard/project-v2',
      },
      {
        name: 'Project List 3',
        path: '/dashboard/project-v3',
      },
      {
        name: 'Team Member',
        path: '/dashboard/team-member',
      },
      {
        name: 'Project Details',
        path: '/dashboard/project-details',
      },
    ],
  },
  {
    name: 'Data Table',
    icon: TableChartIcon,
    path: '/dashboard/data-table-v2',
  },
  {
    type: 'label',
    label: 'Apps',
  },
  {
    name: 'Todo List',
    icon: CheckCircleIcon,
    path: '/dashboard/todo-list',
  },
  {
    name: 'Calendar',
    icon: CalendarTodayIcon,
    path: '/dashboard/calender',
  },
  {
    name: 'Chats',
    icon: ChatIcon,
    children: [
      {
        name: 'Chat 1',
        path: '/dashboard/chat-v1',
      },
    ],
  },
  {
    name: 'Sessions',
    icon: LockIcon,
    children: [
      {
        iconText: 'RT',
        name: 'Sign In',
        children: [
          {
            name: 'Sign In 1',
            path: '/login',
          },
        ],
      },
      {
        iconText: 'RT',
        name: 'Register',
        children: [
          {
            name: 'Register 1',
            path: '/register',
          },
          {
            name: 'Register 2',
            path: '/register-v2',
          },
        ],
      },
      {
        iconText: 'RT',
        name: 'Forget Password',
        children: [
          {
            name: 'Forget Password 1',
            path: '/forget-password',
          },
          {
            name: 'Forget Password 2',
            path: '/forget-password-v2',
          },
        ],
      },
      {
        name: 'Two Step Verification',
        path: '/two-step-verification',
      },
    ],
  },
];
