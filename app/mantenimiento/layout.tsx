"use client";
import { NavBar } from "@/components/navBar/NavBar";
import { clsx } from "@/lib/clsx";
import { useState } from "react";
import style from "./layout.module.scss";

export default function Layou({ children }: { children: React.ReactNode }) {
  const [navBarExpanded, setNavBarExpanted] = useState(false);

  return (
    <div className={style.layout}>
      <NavBar navBarExpanded={navBarExpanded} setNavBarExpanted={setNavBarExpanted} />
      <div className={clsx(style.content, `${navBarExpanded && style.nav_expanded}`)}>{children}</div>
    </div>
  );
}
