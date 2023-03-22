"use client";
import { INavOptions, sideBarOptions } from "@/utils/sideBarOptions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import style from "./navbar.module.scss";

const NavBarOptions: INavOptions[] = sideBarOptions;

export const NavBar = () => {
  const [navBarExpanded, setNavBarExpanted] = useState(false);
  const [subMenuExpanded, setSubMenuExpanded] = useState(0)
  const pathName = usePathname()

  const isPathActive = (route: string) => {
    if(pathName){
        if(pathName.includes(`/${route.toLocaleLowerCase()}`)){
            return style.active
        }
    }
  }

  const handleExpanded = (index:number) => {
    setNavBarExpanted(true)
    if(index + 1 === subMenuExpanded){
        return setSubMenuExpanded(0)
    }
    setSubMenuExpanded(index+1)
  }

  return (
    <div className={style.navbar}>
      <span onClick={()=> setNavBarExpanted(!navBarExpanded)}>hola</span>
      {NavBarOptions.map((item, index) => {
        return (
          <div key={item.name}>
            <div onClick={()=> handleExpanded(index)} className={isPathActive(item.name)}>
              <span>{item.icon}</span>
              {
                navBarExpanded && 
                <span>{item.name}</span>
              }
            </div>
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
