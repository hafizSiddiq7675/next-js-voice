'use client'

export const runtime = 'edge';

import React, { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

const VocodeAppDynamic = dynamic(() => import('@/components/vocode-app'), { ssr: false });


export default function Home() {
  const [backendUrl, setBackendUrl] = useState('');

  useEffect(() => {
    // Only runs on the client-side
    const baseHost = process.env.REACT_APP_BACKEND_HOST || 'localhost:8000';
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const url = `${protocol}//${baseHost}/api/python/conversation/`;
    setBackendUrl(url);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center py-4">
        <VocodeAppDynamic defaultBackendUrl={backendUrl} isInputEditable={false} />
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>

    </main>
  );
}
