"use client";
import { clsx } from "@/lib/clsx";
import { INavOptions, sideBarOptions } from "@/utils/sideBarOptions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import style from "./navbar.module.scss";
import { TbDoorExit } from "react-icons/tb";
import { signOut } from "next-auth/react";

const NavBarOptions: INavOptions[] = sideBarOptions;

export const NavBar = () => {
  const { data: session } = useSession();
  const [navBarExpanded, setNavBarExpanted] = useState(false);
  const [subMenuExpanded, setSubMenuExpanded] = useState(0);
  const pathName = usePathname();

  const isPathActive = (route: string) => {
    if (pathName) {
      if (pathName.includes(`/${route.toLocaleLowerCase()}`)) {
        return style.active;
      }
    }
  };

  const handleExpanded = (index: number) => {
    setNavBarExpanted(true);
    if (index + 1 === subMenuExpanded) {
      return setSubMenuExpanded(0);
    }
    setSubMenuExpanded(index + 1);
  };

  return (
    <div className={style.navbar}>
      <span onClick={() => setNavBarExpanted(!navBarExpanded)}>hola</span>
      {NavBarOptions.map((item, index) => {
        return (
          <div key={item.name}>
            <div
              onClick={() => handleExpanded(index)}
              className={clsx(isPathActive(item.name), style.modulo)}
            >
              <span className={style.icon_modulo}>{item.icon}</span>
              <span className={clsx(`${!navBarExpanded && style.hidden}`)}>
                {item.name}
              </span>
            </div>
            <ul className={`${!navBarExpanded && style.hidden}`}>
              {item.subMenu.map((item) => {
                return (
                  <li
                    key={item.name}
                    className={clsx(
                      `${
                        subMenuExpanded == index + 1 && style.showsubmenuitem
                      }`,
                      isPathActive(item.name)
                    )}
                  >
                    <Link href={`${item.url}`}>
                      {item.icon} {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <div className={style.user}>
        <div
          className={clsx(
            `${!navBarExpanded ? style.hidden : style.user_options}`
          )}
        >
          <div onClick={()=> signOut()} className={`${subMenuExpanded == 100 && style.showuseroptions}`}>
            <span>
              <TbDoorExit /> Cerrar Session
            </span>
          </div>
          <div className={`${subMenuExpanded == 100 && style.showuseroptions}`}>
            <span>
              <TbDoorExit /> Cerrar Session
            </span>
          </div>
          <div className={`${subMenuExpanded == 100 && style.showuseroptions}`}>
            <span>
              <TbDoorExit /> Cerrar Session
            </span>
          </div>
        </div>
        <div className={style.user_data} onClick={() => handleExpanded(99)}>
          <div className={style.img}>
            <span>{session?.user.nombre.split("")[0].toUpperCase()}</span>
          </div>
          <div
            className={clsx(`${!navBarExpanded ? style.hidden : style.info}`)}
          >
            <span className={`${!navBarExpanded && style.hidden}`}>
              {session?.user.nombre}
            </span>
            <span className={`${!navBarExpanded && style.hidden}`}>
              {session?.user.correo.toUpperCase()}fghhfhfhgfhfhfhgfgfhgfh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
