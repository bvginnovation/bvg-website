"use client";
import React, { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "@chakra-ui/react";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = searchParams.get("pathname");

  useEffect(() => {
    if (pathName === null || pathName === "/") {
      router.replace("/home");
    }
  }, [router, pathName]);

  return null;
}

export default function Home() {
  return (
    <Suspense fallback={<Spinner />}>
      <HomeContent />
    </Suspense>
  );
}
