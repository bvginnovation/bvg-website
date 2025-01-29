'use client';

import React from 'react';
import './404.styles.css';
import { useRouter } from 'next/navigation';

const Page404 = () => {
  const router = useRouter();
  return (
    <div className="content">
      <h1>404</h1>
      <img src={'/assets/gif/error.gif'} alt={'gif'} />
      <div className="text">
        <h2>Look like you're lost</h2>
        <p>the page you are looking for not available</p>
        <button onClick={() => router.back()} className="goback">
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default Page404;
