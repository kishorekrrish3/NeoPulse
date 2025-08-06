import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'NeoPulse - The Future of Smartwatches',
  description:
    'Minimalist smartwatch to track health, get notifications, and stay stylish. Discover NeoPulse.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="NeoPulse, smartwatch, health, fitness, tech wearable, notifications" />
        <meta name="author" content="NeoPulse Team" />

        {/* ✅ Open Graph (for better social sharing) */}
        <meta property="og:title" content="NeoPulse - The Future of Smartwatches" />
        <meta property="og:description" content="Minimalist smartwatch to track health, get notifications, and stay stylish. Discover NeoPulse." />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://neopulse.app" />
        <meta property="og:type" content="website" />

        {/* ✅ Microsoft Clarity Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sqmss3g3kk");`,
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
