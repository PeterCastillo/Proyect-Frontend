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
import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import { TbArrowsMoveVertical } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";

const NavBarOptions: INavOptions[] = sideBarOptions;

const NavBar = () => {
  const { data: session } = useSession();
  const [navBarExpanded, setNavBarExpanted] = useState(false);
  const [subMenuExpanded, setSubMenuExpanded] = useState(0);
  const { theme, setTheme } = useTheme();
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
    <div className={clsx(style.navbar, `${navBarExpanded && style.expanded}`)}>
      <div className={style.toggle}>
        <span onClick={() => setNavBarExpanted(!navBarExpanded)}>
          <IoIosArrowForward />
        </span>
      </div>
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
              <span
                className={`${
                  !navBarExpanded
                    ? style.hidden
                    : clsx(
                        style.icon_modulo_drop,
                        subMenuExpanded === index + 1 && style.icon_rotate
                      )
                }`}
              >
                <AiOutlineDown />
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
                    <Link href={`${item.url}`}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <div className={style.user}>
        <div className={style.toggle_theme}>
          <div
            onClick={() => setTheme("dark")}
            className={clsx(
              style.toogleoption,
              `${theme === "dark" && style.optionactive}`
            )}
          >
            <div>
              <BsFillMoonFill />
            </div>{" "}
            <div className={`${!navBarExpanded && style.hidden}`}>Dark</div>
          </div>
          <div
            onClick={() => setTheme("light")}
            className={clsx(
              style.toogleoption,
              `${theme === "light" && style.optionactive}`
            )}
          >
            <div>
              <BiSun />
            </div>{" "}
            <div className={`${!navBarExpanded && style.hidden}`}>Light</div>
          </div>
        </div>
        <div
          className={clsx(
            `${!navBarExpanded ? style.hidden : style.user_options}`
          )}
        >
          <div
            onClick={() => signOut()}
            className={`${subMenuExpanded == 100 && style.showuseroptions}`}
          >
            <span>
              <TbDoorExit /> Cerrar session
            </span>
          </div>
          <div
            onClick={() => signOut()}
            className={`${subMenuExpanded == 100 && style.showuseroptions}`}
          >
            <span>
              <RiLockPasswordLine /> Cambiar contraseña
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
              {session?.user.correo.toUpperCase()}
            </span>
          </div>
          <div className={style.drop_user_options}>
            <TbArrowsMoveVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
