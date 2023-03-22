"use client"
import { NavBar } from "@/components/navBar/NavBar";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import style from "./layout.module.scss"

export default function Layou({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={style.layout}>
      <NavBar/>
      <div>
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
      {children}
    </div>
  );
}
