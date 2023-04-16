export const next = (
  component: number,
  setRender: (state: number) => void,
  refTabContainer: any
) => {
  if (refTabContainer) {
    setRender(component);
    const renders = refTabContainer.current.children;
    if (component == 1 || component == 2) {
      refTabContainer.current.style.height = `max-content`;
    } else {
      refTabContainer.current.style.height = `100%`;
    }
    for (let i = 0; i < renders.length; i++) {
      renders[i].style.height = `100%`;
      if (i != component) {
        renders[i].style.height = `0rem`;
        renders[i].style.transition = `100ms ease-out all`;
      }
    }
    const transformNumber = component * 100;
    refTabContainer.current.style.transition = `200ms ease-out all`;
    refTabContainer.current.style.transform = `translateX(calc(-${transformNumber}% - ${
      component * 10
    }px))`;
  }
};
