'use client'
const Child = () => {
  const fdf = () => {
    console.log("hola");
  };
  return <div onClick={fdf}>Child</div>;
};

export const Parent = () => {
  return <div>Parent <Child/></div>;
};
