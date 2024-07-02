'use client'
import { useEffect, useState } from "react";
import QrReader from "./components/QrReader";
import QrScanner from "qr-scanner";


export default function Home() {

  const [origin, setOrigin] = useState<string>("");

  const [result, setResult] = useState<string>("")
  

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  const onScanSuccess = (scanResult: QrScanner.ScanResult) => {
    console.log(scanResult);
    setResult(scanResult.data)
  };
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <QrReader onScanSuccess={onScanSuccess}/>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {origin}
        </p>
      </div>
    </main>
  );
}
