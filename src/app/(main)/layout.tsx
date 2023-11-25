// import { useEffect } from "react";
// import Appbar from "@/components/appbar";
// import Footer from "@/components/footer";

import Header from "@/components/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1>main layout</h1>
      <Header />
      {children}
    </div>
  );
}
