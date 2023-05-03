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
  try {
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
    if (!response.ok) {
      throw new Error(`${json.message}: ${json.content}`);
    }
    return { json, status };
  } catch (error) {
    console.log(error);
    return { json: null, status: 500 };
  }
};
