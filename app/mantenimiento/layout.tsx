import NavBar from "@/components/commos/navBar/NavBar";
import style from "./layout.module.scss";

export default function Layou({ children }: { children: React.ReactNode }) {

  return (
    <div className={style.layout}>
      <NavBar/>
      <div className={style.content}>{children}</div>
    </div>
  );
}
