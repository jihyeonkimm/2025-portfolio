import type { Metadata } from 'next';
import StyledComponentsRegistry from './lib/registry';
import GlobalStyle from './_common/styles/globalStyles';
import ClientThemeProvider from './lib/ThemeProvider';

export const metadata: Metadata = {
  title: 'Jihyeon Kim Portfolio',
  description: 'Jihyeon Kim Portfolio',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
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
