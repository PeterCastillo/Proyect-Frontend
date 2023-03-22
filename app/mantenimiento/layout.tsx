"use client"
import { NavBar } from "@/components/navBar/NavBar";
import { useTheme } from "next-themes";
import style from "./layout.module.scss"

export default function Layou({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={style.layout}>
      <NavBar/>
      <div className={style.content}>
      {children}
      </div>
    </div>
  );
}
