import "./globals.css";

export const metadata = {
  title: "Photo gallery",
  description: "website to upload and display photos",
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
