const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getSucursalesBySucursalService = async (
  sucursal_id: string,
  token: string
) => {
  const response = await fetch(`${apiUrl}/sucursales_empresa/${sucursal_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store'
  }, );
  const status = response.status;
  const json = await response.json();
  return { json, status };
};
