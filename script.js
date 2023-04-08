import { dom } from "./DOM.js";

const { options, backdrop, backdrop_effect } = dom;

options.forEach((option) => {
  option.addEventListener("click", (ev) => {
    ev.stopPropagation();
    options.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
  });
});

options.forEach((option) => {
  if (option.getAttribute("data-value") === "bmi") option.click();
});

backdrop_effect.forEach((element) => {
  element.addEventListener("click", () => {
    backdrop.classList.toggle("visable");
  });
});

backdrop.addEventListener("click", () => {
  backdrop_effect.forEach((container) => {
    container.classList.remove("active");
  });
  backdrop.classList.remove("visable");
});
