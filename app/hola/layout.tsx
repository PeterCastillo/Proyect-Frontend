"use client"
import { useTheme } from "next-themes";
import { useEffect } from "react";
export default function Layou({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  useEffect(()=>{
    console.log(theme)
  },[theme])
  return (
    <div>
      <div>
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
      {children}
    </div>
  );
}
