import "./globals.css";
export const metadata = {
  title: "EBC Studio",
  description: "Studio reservation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-mona antialiased `}>{children}</body>
    </html>
  );
}
