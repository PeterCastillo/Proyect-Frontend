import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { Parent } from "./Child";


export default async function Page() {
  const session = await getServerSession(authOptions);
  //   console.log(session?.user);
  //   console.log(session);
  return (
    <div>
      hola <Parent />
    </div>
  );
}
