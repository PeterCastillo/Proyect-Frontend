import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";


export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <div>
    </div>
  );
}
