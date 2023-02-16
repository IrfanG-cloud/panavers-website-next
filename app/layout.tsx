// These styles apply to every route in the application
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-gradient-to-tr
        from-gray-900
        to-purple-900">{children}</body>
    </html>
  );
}