"use client";
import React from "react";
import {
  useRouter,
  usePathname,
  useParams,
  useSearchParams,
} from "next/navigation";

function Page() {
  const path = usePathname();
  console.log(path);
  return <div>b</div>;
}

export default Page;
