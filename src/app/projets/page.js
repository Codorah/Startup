"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// The projects section has been removed. Redirect to home.
export default function ProjetsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#contact');
  }, [router]);

  return (
    <div className="pt-32 min-h-screen bg-[#F8F7FF] flex items-center justify-center">
      <p className="text-[#6B7280] font-mono text-sm">Redirection...</p>
    </div>
  );
}
