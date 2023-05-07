const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getSucursalesBySucursalService = async (
  sucursal_id: string,
  token: string
) => {
  try {
    const response = await fetch(
      `${apiUrl}/sucursales_activas/${sucursal_id}`,
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
