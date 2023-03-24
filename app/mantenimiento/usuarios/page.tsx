"use client";
import style from "./page.module.scss";
import { useState } from "react";

export default function Page() {
  const [render, setRender] = useState(2);
  return (
    <div className={style.page}>
      <span className={style.title}>Usuario</span>
      <div className={style.tab}>
        <span
          className={`${render == 0 && style.tabactive}`}
          onClick={() => setRender(0)}
        >
          Lista
        </span>
        <span
          className={`${render == 1 && style.tabactive}`}
          onClick={() => setRender(1)}
        >
          Crear
        </span>
        <span
          className={`${render == 2 ? style.tabactive : style.editdescative}`}
        >
          Editar
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit
        impedit asperiores soluta illo. Blanditiis, delectus tempora. Ut
        excepturi corrupti nostrum alias assumenda eius magni accusantium
        laborum, atque sapiente consectetur.
      </p>
      
    </div>
  );
}
