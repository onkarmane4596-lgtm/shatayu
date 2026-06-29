'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

function PortalIframe() {
  const searchParams = useSearchParams();
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  useEffect(() => {
    // 1. Manage localStorage 'p' identifier
    let p = window.localStorage.getItem('p');
    if (!p) {
      p = crypto.randomUUID();
      window.localStorage.setItem('p', p);
    }

    // 2. Read query params as per original PHP behavior
    const asdf = searchParams.get('asdf');
    const i = searchParams.get('i');
    const j = searchParams.get('j');
    const m = searchParams.get('m');

    // 3. Construct domain variables
    const t = asdf !== null ? 'test.' : '';
    const page = i !== null ? 'admit.php' : 'login.php';
    const host = window.location.host;

    // 4. Construct base URL
    let url = `https://${t}livecourse.co/${page}?a=${host}`;

    // 5. Append optional params
    if (j !== null) {
      url += `&j=${j}`;
    }
    if (m !== null) {
      url += `&m=${m}`;
    }

    // 6. Append p param
    url += `&p=${p}`;

    setIframeUrl(url);
  }, [searchParams]);

  if (!iframeUrl) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-[#FFFBF2]">
        <Loader2 className="h-10 w-10 animate-spin text-[#5DA89F]" />
        <p className="mt-4 text-[#5DA89F] font-semibold animate-pulse">Loading Portal...</p>
      </div>
    );
  }

  return (
    <iframe
      src={iframeUrl}
      className="w-full h-full border-none"
      style={{ width: '100vw', height: '100vh' }}
      allowFullScreen
    />
  );
}

export default function PortalPage() {
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-white w-screen h-screen overflow-hidden m-0 p-0"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#FFFBF2]">
          <Loader2 className="h-10 w-10 animate-spin text-[#5DA89F]" />
          <p className="mt-4 text-[#5DA89F] font-semibold animate-pulse">Loading Portal...</p>
        </div>
      }>
        <PortalIframe />
      </Suspense>
    </div>
  );
}
