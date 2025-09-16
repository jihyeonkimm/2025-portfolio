import type { Metadata } from 'next';
import StyledComponentsRegistry from './lib/registry';
import GlobalStyle from './_common/styles/globalStyles';
import ClientThemeProvider from './lib/ThemeProvider';

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Jihyeon Kim',
  description: 'Jihyeon Kim Portfolio',
  openGraph: {
    title: 'Jihyeon Kim',
    description: 'Jihyeon Kim Portfolio',
    url: 'https://jhkim-work.com',
    siteName: 'Jihyeon Kim Portfolio',
    images: [
      {
        url: '/assets/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio preview image',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang='ko'>
      <body>
        <StyledComponentsRegistry>
          <ClientThemeProvider>
            <GlobalStyle />
            {children}
            {modal}
          </ClientThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
