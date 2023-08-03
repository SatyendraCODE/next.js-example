"use client";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function Page() {
  const path = usePathname();
  console.log(path);

  return <div>page</div>;
}

export default Page;
