import "./globals.css";
export const metadata = {
  title: "Abhishek Kalia",
  description: "Your friendly neighbourhood UI guy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="https://use.typekit.net/sgj8yhj.css" />
      </head>
      <body className="antialiased dark:bg-zinc-900">{children}</body>
    </html>
  );
}
