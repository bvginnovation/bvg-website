"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = searchParams.get("pathname");
  useEffect(() => {
    if (pathName === null || pathName === "/") {
      router.replace("/home");
    }
  }, [router]);
  return <></>;
}
