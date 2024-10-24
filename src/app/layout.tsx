import { getSession } from "next-auth/react";
import "./globals.css";
import Wrappers from "@/common/providers/wrappers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()
  return (
    <html lang="en">
      <body>
        <Wrappers session={session}>
          {children}
        </Wrappers>
      </body>
    </html>
  );
}
