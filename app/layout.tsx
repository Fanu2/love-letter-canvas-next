import "./globals.css";

export const metadata = {
  title: "Love Letter Canvas",
  description: "A gentle space for love letters and cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
