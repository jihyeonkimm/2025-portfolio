import type { Metadata } from 'next';
import StyledComponentsRegistry from './lib/registry';
import GlobalStyle from './_common/styles/globalStyles';
import ClientThemeProvider from './lib/ThemeProvider';

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Jihyeon Kim Portfolio',
  description: 'Jihyeon Kim Portfolio',
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
