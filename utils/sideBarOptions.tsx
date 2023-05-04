import { MdKitchen, MdTableRestaurant } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdWarehouse, MdFoodBank } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { TbBuildingWarehouse } from "react-icons/tb";
import { TbShoppingCartPlus, TbShoppingCartX } from "react-icons/tb";

interface ISubMenu {
  icon: JSX.Element;
  name: string;
  url: string;
  acceso: boolean
}

export interface INavOptions {
  icon: JSX.Element;
  name: string;
  subMenu: ISubMenu[];
}

export const sideBarOptions = (accesos: string[]): INavOptions[] => {
  return [
    {
      icon: <IoSettingsOutline />,
      name: "Mantenimiento",
      subMenu: [
        {
          icon: <MdKitchen />,
          name: "Cocinas",
          url: "/mantenimiento/cocina",
          acceso: accesos.includes("Cocinas") || accesos.includes("ADMIN")
        },
        {
          icon: <MdTableRestaurant />,
          name: "Mesas",
          url: "/mantenimiento/mesas",
          acceso: accesos.includes("Mesas") || accesos.includes("ADMIN")
        },
        {
          icon: <MdKitchen />,
          name: "Ingredientes",
          url: "/mantenimiento/ingredientes",
          acceso: accesos.includes("Ingredientes") || accesos.includes("ADMIN")
        },
        {
          icon: <IoRestaurantSharp />,
          name: "Platillos",
          url: "/mantenimiento/platillos",
          acceso: accesos.includes("Platillos") || accesos.includes("ADMIN")
        },
        {
          icon: <MdWarehouse />,
          name: "Almacenes",
          url: "/mantenimiento/almacenes",
          acceso: accesos.includes("Almacenes") || accesos.includes("ADMIN")
        },
        {
          icon: <FaUsersCog />,
          name: "Usuarios",
          url: "/mantenimiento/usuarios",
          acceso: accesos.includes("Usuarios") || accesos.includes("ADMIN")
        },
      ],
    },
    {
      icon: <TbBuildingWarehouse />,
      name: "Inventario",
      subMenu: [
        {
          icon: <TbShoppingCartPlus />,
          name: "Agregat Inventario",
          url: "/inventario/agregar-inventario", 
          acceso: accesos.includes("Agregat Inventario") || accesos.includes("ADMIN")
        },
        {
          icon: <TbShoppingCartX />,
          name: "Eliminar Iventario",
          url: "/inventario/eliminar-inventario",
          acceso: accesos.includes("Eliminar Iventario") || accesos.includes("ADMIN")
        },
      ],
    },
  ];
};
