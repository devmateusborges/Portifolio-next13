"use client";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className=" min-h-[100vh]">{children}</div>
      </body>
    </html>
  );
}
