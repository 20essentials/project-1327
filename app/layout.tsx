import { type Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Streaming',
  description: 'Generated streaming with next js',
  icons: {
    icon: '/assets/favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
