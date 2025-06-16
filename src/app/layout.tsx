'use client';
import { baselightTheme } from '@/utils/theme/DefaultColors';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './global.css';
import { Provider } from 'react-redux';
import store from '@/store/store';
import AxiosInterceptor from '@/utils/AxiosInterceptor';
import ProgressAlerts from '@/app/dashboardLayout/components/shared/progressAlerts/ProgressAlerts';
import ErrorBoundary from '@/app/dashboardLayout/components/shared/ErrorBoundary';

AxiosInterceptor.initialize();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Provider store={store}>
            <CssBaseline />
            <ProgressAlerts />

            <ErrorBoundary>{children}</ErrorBoundary>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
