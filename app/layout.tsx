import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "./i18n/I18nContext";

export const metadata: Metadata = {
  title: "Rodolfo Borja - Full Stack Developer",
  description: "Portfolio of Rodolfo Borja - Full Stack Developer specializing in modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
