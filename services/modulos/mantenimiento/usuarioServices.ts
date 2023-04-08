const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getUsersBySucursalService = async (
  sucursal_id: string,
  token: string
) => {
  const response = await fetch(`${apiUrl}/usuarios/${sucursal_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const status = response.status;
  const json = await response.json();
  return { json, status };
};
