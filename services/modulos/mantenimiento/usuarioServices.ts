import {
  INewUsuario,
  IUsuario,
} from "@/types/modulos/mantenimiento/usuarioInterfaces";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getUsersBySucursalService = async (
  sucursal_id: string,
  token: string,
  all: boolean = false
) => {
  try {
    const query_params = new URLSearchParams({
      all: all.toString(),
    });
    const response = await fetch(
      `${apiUrl}/usuarios/${sucursal_id}?${query_params}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );
    const status = response.status;
    const json = await response.json();
    if (!response.ok) {
      throw {
        name: "MyError",
        message: `${json.message}: ${json.content} - status:${response.status}`,
        status: response.status,
      };
    }
    return { json, status };
  } catch (error:any) {
    console.log(error.message);
    return { json: { content: [] }, status: error.status || 500 };
  }
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
      throw {
        name: "MyError",
        message: `${json.message}: ${json.content} - status:${response.status}`,
        status: response.status,
      };
    }
    return { json, status };
  } catch (error: any) {
    console.log(error.message);
    return { json: null, status: error.status || 500 };
  }
};

export const editUserService = async (data: IUsuario, token: string) => {
  try {
    const response = await fetch(`${apiUrl}/usuarios/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const status = response.status;
    const json = await response.json();
    if (!response.ok) {
      throw {
        name: "MyError",
        message: `${json.message}: ${json.content} - status:${response.status}`,
        status: response.status,
      };
    }
    return { json, status };
  } catch (error: any) {
    console.log(error.message);
    return { json: null, status: error.status || 500 };
  }
};

export const deleteUserService = async (data: string, token: string) => {
  try {
    const response = await fetch(`${apiUrl}/usuarios/${data}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const status = response.status;
    const json = await response.json();
    if (!response.ok) {
      throw {
        name: "MyError",
        message: `${json.message}: ${json.content} - status:${response.status}`,
        status: response.status,
      };
    }
    return { json, status };
  } catch (error:any) {
    console.log(error.message);
    return { json: null, status: error.status || 500 };
  }
};
