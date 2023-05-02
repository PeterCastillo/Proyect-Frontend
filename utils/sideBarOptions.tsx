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
          acceso: accesos.includes("Cocinas")
        },
        {
          icon: <MdTableRestaurant />,
          name: "Mesas",
          url: "/mantenimiento/mesas",
          acceso: accesos.includes("Mesas")
        },
        {
          icon: <MdKitchen />,
          name: "Ingredientes",
          url: "/mantenimiento/ingredientes",
          acceso: accesos.includes("Ingredientes")
        },
        {
          icon: <IoRestaurantSharp />,
          name: "Platillos",
          url: "/mantenimiento/platillos",
          acceso: accesos.includes("Platillos")
        },
        {
          icon: <MdWarehouse />,
          name: "Almacenes",
          url: "/mantenimiento/almacenes",
          acceso: accesos.includes("Almacenes")
        },
        {
          icon: <FaUsersCog />,
          name: "Usuarios",
          url: "/mantenimiento/usuarios",
          acceso: accesos.includes("Usuarios")
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
          acceso: accesos.includes("Alimentos")
        },
        {
          icon: <TbShoppingCartPlus />,
          name: "Mesas",
          url: "/inventario/agregar-inventario",
          acceso: accesos.includes("Mesas")
        },
        {
          icon: <TbShoppingCartX />,
          name: "Ingredientes",
          url: "/inventario/eliminar-inventario",
          acceso: accesos.includes("Ingredientes")
        },
      ],
    },
  ];
};
