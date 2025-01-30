import type { Metadata } from 'next';
import '@/configs/globals.css';
import MuiXLicense from '@/configs/MuiXLicense';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import fonts from '@/configs/fonts';
import theme from '@/configs/theme';

export const metadata: Metadata = {
    title: 'Flu Monit',
    description: 'Flussonic monitoring tool',
    icons: {
        icon: '/logos/logo-192x192.png',
    },
};

type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en'>
            <body className={`${fonts.roboto.variable}`}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </AppRouterCacheProvider>
                <MuiXLicense />
            </body>
        </html>
    );
}
