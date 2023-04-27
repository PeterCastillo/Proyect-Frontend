import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import TabUsuario from "@/components/modulos/mantenimiento/usuario/TabUsuario";
import { getUsersBySucursalService } from "@/services/modulos/mantenimiento/usuarioServices";
import { getSucursalesBySucursalService } from "@/services/modulos/mantenimiento/sucursalServices";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session) {
    const usuariosList = await getUsersBySucursalService(
      session.user.sucursal_id,
      session.user.token
    );
    const sucursalesList = await getSucursalesBySucursalService(
      session.user.sucursal_id,
      session.user.token
    );
    return (
      <TabUsuario
        usuario={session.user}
        usuariosList={usuariosList.json.content}
        sucursalesList={sucursalesList.json.content}
      />
    );
  }
}
