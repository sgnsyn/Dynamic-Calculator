import { dom } from "../DOM.js";
import { unitsandConversionFactors as UCF } from "../units.js";
const {
  b_height_input,
  b_mass_input,
  b_select_unit_height,
  b_select_unit_mass,
  b_unit_container_3,
  b_unit_container_4,
  b_u_text_3,
  b_u_text_4,
  output,
} = dom;

const { length, weight_and_mass } = UCF;
// Populate Height Value
for (let unit in length) {
  if (["centimeters", "meters", "inches", "feet"].includes(unit)) {
    const button = document.createElement("button");
    button.classList = "options unitsandValues backdropEffect";
    unit = validateStr(unit);
    button.textContent = `${unit}`;
    button.addEventListener("click", (ev) => {
      ev.stopPropagation();
      dom.backdrop.click();
      b_u_text_3.textContent = unit;
    });
    b_unit_container_3.append(button);
  }
}

// Populate Mass Value

for (let unit in weight_and_mass) {
  if (["grams", "kilograms", "pounds", "ounces"].includes(unit)) {
    const button = document.createElement("button");
    button.classList = "options unitsandValues backdropEffect";
    unit = validateStr(unit);
    button.textContent = `${unit}`;
    button.addEventListener("click", (ev) => {
      ev.stopPropagation();
      dom.backdrop.click();
      b_u_text_4.textContent = unit;
    });
    b_unit_container_4.append(button);
  }
}

// make a corrosponding conatainer visable

b_select_unit_mass.addEventListener("click", () => {
  b_unit_container_4.classList.toggle("active");
});
b_select_unit_height.addEventListener("click", () => {
  b_unit_container_3.classList.toggle("active");
});

// an event listener for the newly populated value
const options = document.querySelectorAll(".options");
options.forEach((option) => {
  if (option.textContent === "Kilograms" || option.textContent === "Meters") {
    option.classList.add("active");
  }
  option.addEventListener("click", (ev) => {
    options.forEach((_option) => {
      if (option.parentElement === _option.parentElement) {
        _option.classList.remove("active");
      }
    });
    option.classList.add("active");
  });
});

// calculate and fill output

function calculateBMI(mass, height) {
  return mass / height ** 2;
}
function operations() {
  let mass = b_mass_input.value;
  let height = b_height_input.value;
  let active_unit_mass;
  b_unit_container_4.childNodes.forEach((element) => {
    if (element.classList.contains("active")) {
      active_unit_mass = reverseValidate(element.textContent);
      return;
    }
  });
  let active_unit_height;
  b_unit_container_3.childNodes.forEach((element) => {
    if (element.classList.contains("active")) {
      active_unit_height = reverseValidate(element.textContent);
      return;
    }
  });
  mass = to_si_unit(parseFloat(mass), active_unit_mass, "weight_and_mass", UCF);
  height = to_si_unit(parseFloat(height), active_unit_height, "length", UCF);
  let bmi_result = calculateBMI(mass, height);
  output.textContent = Math.round(bmi_result);
}

b_height_input.addEventListener("input", (e) => {
  operations();
});
b_mass_input.addEventListener("input", (e) => {
  operations();
});

b_unit_container_3.childNodes.forEach((child) => {
  child.addEventListener("click", () => {
    operations();
  });
});

b_unit_container_4.childNodes.forEach((child) => {
  child.addEventListener("click", () => {
    operations();
  });
});
