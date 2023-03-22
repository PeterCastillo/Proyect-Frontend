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
  acceso: boolean;
}

export interface INavOptions {
  icon: JSX.Element;
  name: string;
  subMenu: ISubMenu[];
}

export const sideBarOptions: INavOptions[] = [
  {
    icon: <IoSettingsOutline />,
    name: "Mantenimiento",
    subMenu: [
      {
        icon: <MdKitchen />,
        name: "Cocinas",
        url: "/mantenimiento/cocina",
        acceso: true,
      },
      {
        icon: <MdTableRestaurant />,
        name: "Mesas",
        url: "/mantenimiento/mesas",
        acceso: true,
      },
      {
        icon: <MdKitchen />,
        name: "Ingredientes",
        url: "/mantenimiento/ingredientes",
        acceso: true,
      },
      {
        icon: <IoRestaurantSharp />,
        name: "Platillos",
        url: "/mantenimiento/platillos",
        acceso: true,
      },
      {
        icon: <MdWarehouse />,
        name: "Almacenes",
        url: "/mantenimiento/almacenes",
        acceso: true,
      },
      {
        icon: <FaUsersCog />,
        name: "Usuarios",
        url: "/mantenimiento/usuarios",
        acceso: true,
      },
    ],
  },
  {
    icon: <TbBuildingWarehouse />,
    name: "Inventario",
    subMenu: [
      {
        icon: <MdFoodBank />,
        name: "Alimentos",
        url: "/inventario/alimentos",
        acceso: true,
      },
      {
        icon: <TbShoppingCartPlus />,
        name: "Mesas",
        url: "/inventario/agregar-inventario",
        acceso: true,
      },
      {
        icon: <TbShoppingCartX />,
        name: "Ingredientes",
        url: "/inventario/eliminar-inventario",
        acceso: true,
      },
    ],
  },
];
