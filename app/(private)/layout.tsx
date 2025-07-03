import { headers } from "next/headers";

import AuthProvider from "@/provider/auth";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userHeader = (await headers()).get("x-user");
  const initialUser = userHeader ? JSON.parse(userHeader) : null;

  return <AuthProvider initialUser={initialUser}>{children}</AuthProvider>;
}
