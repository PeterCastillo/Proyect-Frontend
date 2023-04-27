const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getSucursalesBySucursalService = async (
  sucursal_id: string,
  token: string
) => {
  const response = await fetch(`${apiUrl}/sucursales_empresa/${sucursal_id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const status = response.status;
  const json = await response.json();
  return { json, status };
};
