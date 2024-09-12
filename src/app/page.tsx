import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token")?.value;
  console.log(token, "Redirecting to signin");
  if (!token) {
    redirect("/auth/signin");
  }

  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
}
