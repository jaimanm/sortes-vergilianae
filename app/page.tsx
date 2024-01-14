'use client'

// app/page.tsx is the UI for the '/' URL
import Link from "next/link";
import Button from "./components/Button/button";

export default function Page() {

  return (
    <div className="flex h-screen w-screen justify-center items-center p-20">
      <div className="flex-col space-y-6">
      <h1 className="text-3xl font-bold underline">Hello, Welcome!</h1>
      <p className="text-2xl font-bold">This is the <i className="hover:text-[lightseagreen]">Sortes Vergilianae</i>, an ancient Roman window into your future...</p>
      <Button message="See Your Future!" />
      <p className="text-xl selection:bg-transparent selection:text-[lightseagreen]">**best viewed on desktop</p>
      <p className="text-xl selection:bg-transparent selection:text-[lightseagreen]">(use landscape mode if on mobile)</p>
      </div>
    </div>
  );
}

