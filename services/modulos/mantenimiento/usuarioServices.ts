import { INewUsuario } from "@/types/modulos/mantenimiento/usuarioInterfaces";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getUsersBySucursalService = async (
  sucursal_id: string,
  token: string,
  all: boolean = false
) => {
  const query_params = new URLSearchParams({
    all: all.toString(),
  });
  const response = await fetch(
    `${apiUrl}/usuarios/${sucursal_id}?${query_params}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const status = response.status;
  const json = await response.json();
  return { json, status };
};

export const createUserService = async (data: INewUsuario, token: string) => {
  console.log(`${apiUrl}/usuarios`, data);
  const response = await fetch(`${apiUrl}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const status = response.status;
  const json = await response.json();
  return { json, status };
};
