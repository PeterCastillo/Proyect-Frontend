"use client";
import { INavOptions, sideBarOptions } from "@/utils/sideBarOptions";
import Link from "next/link";
import { useState } from "react";
import style from "./navbar.module.scss";

const NavBarOptions: INavOptions[] = sideBarOptions;

export const NavBar = () => {
  const [navBarExpanded, setNavBarExpanted] = useState(true);
  const [subMenuExpanded, setSubMenuExpanded] = useState(0)

  const handleExpanded = (index:number) => {
    setNavBarExpanted(true)
    if(index + 1 === subMenuExpanded){
        return setSubMenuExpanded(0)
    }
    setSubMenuExpanded(index+1)
  }

  return (
    <div className={style.navbar}>
      {NavBarOptions.map((item, index) => {
        return (
          <div key={item.name}>
            <span onClick={()=> handleExpanded(index)}>
              {item.icon} {navBarExpanded && item.name}
            </span>
            {navBarExpanded && (
              <ul>
                {item.subMenu.map((item) => {
                  return (
                    <li key={item.name} className={`${subMenuExpanded == index + 1 && style.showsubmenuitem}`}>
                      <Link href={`${item.url}`}>
                        {item.icon} {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};
