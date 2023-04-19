export const next = (component: number, refTabContainer: any) => {
  const tabs = refTabContainer.current.previousSibling.children[0].children;
  let tabClassNames;
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].className.includes("tabactive")) {
      tabClassNames = tabs[i].className.split(" ")[1];
    }
  }
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className =
      i == component
        ? (tabs[i].className = tabs[i].className.concat(" ", tabClassNames))
        : tabs[i].className.split(" ")[0];
  }
  refTabContainer.current.style.height =
    component == 0 ? `100%` : `max-content`;
  const renders = refTabContainer.current.children;
  for (let i = 0; i < renders.length; i++) {
    renders[i].style.height = i == component ?  `100%` : `0rem`
  }
  refTabContainer.current.style.transform = `translateX(calc(-${component * 100}% - ${
    component * 10
  }px))`;
};
