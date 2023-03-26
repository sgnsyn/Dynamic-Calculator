const humbergerOption = document.querySelector(".optionPhone");
const optionsContainer = document.querySelector(".optionsContainer");
const mainOptions = document.querySelectorAll(".mainOptions");
const backdrop = document.querySelector(".unitsContainerBackdrop");
const childSelectBtn = document.querySelectorAll(".ChildUnitSelect");
const childUnitContainer = document.querySelectorAll(".childUnitContainer");
const conUnitContTop = document.querySelector(".unitConversionResultTop");
const conUnitContBottom = document.querySelector(".unitConversionResultBottom");
const conUnitCont = document.querySelectorAll(".unitConversionResult");
const darkModeBtn = document.querySelector(".darkBtn");
const darkText = document.querySelector(".darkText");
let unitsandValues = document.querySelectorAll(".options");
const parentSelectBtn = document.querySelector(".parentUnitSelect");
const parentUnitContainer = document.querySelector(".unitsContainer");
const phoneParentUnitSelect = document.querySelector(".parentUnitSelectText");
const backdropEffect = document.querySelectorAll(".backdropEffect");
const outputContainer = document.querySelector(".outputContainer");
const bmiContainer = document.querySelector(".bmiContainer");
const root = document.documentElement;
const unitConversionContainer = document.querySelector(
  ".unitConversionContainer"
);
const allCalculatorBtnContainer = document.querySelector(
  ".allCalculatorBtnContainer"
);
const conversionUnitsbox = document.querySelector(
  ".unitConversionContainerUnitsContainer"
);
const bmiResultHeight = document.querySelector(".bmiResultHeight");
const bmiResultMass = document.querySelector(".bmiResultMass");

unitsandConversionFactors = {
  volume: {
    milliliters: 1000000,
    cubic_centimeters: 1000000,
    liters: 1000,
    cubic_meters: 1,
    teaspoons_US: 202884.1,
    tablespoons_US: 67628.05,
    fluid_ounces_US: 33814.02,
    cups_US: 4226.753,
    pints_US: 2113.376,
    quarts_US: 1056.688,
    gallons_US: 264.1721,
    cubic_inches: 61023.74,
    cubic_feet: 35.31467,
    cubic_yards: 1.307951,
    teaspoons_UK: 168936.4,
    tablespoons_UK: 56312.13,
    fluid_ounces_UK: 35195.08,
    pints_UK: 1759.754,
    quarts_UK: 879.877,
    gallons_UK: 219.9692,
  },
  length: {
    nanometers: 1000000000,
    microns: 1000000,
    millimeters: 1000,
    centimeters: 100,
    meters: 1,
    kilometers: 0.001,
    inches: 39.37008,
    feet: 3.28084,
    yards: 1.093613,
    miles: 0.000621,
    nautical_miles: 0.00054,
  },
  weight_and_mass: {
    carats: 5000,
    milligrams: 1000000,
    centigrams: 100000,
    decigrams: 10000,
    grams: 1000,
    dekagrams: 100,
    hectograms: 10,
    kilograms: 1,
    metric_tonnes: 0.001,
    ounces: 35.27396,
    pounds: 2.204623,
    stone: 0.157473,
    short_tons_US: 0.001102,
    long_tons_UK: 0.000984,
  },
  temperature: {
    celsius: () => {
      return 0;
    },
    fahrenheit: () => {
      0;
    },
    kelvin: () => {
      0;
    },
  },
  energy: {
    electron_volts: 6.241509 * 10 ** 18,
    joules: 1,
    kilojoules: 0.001,
    thermal_calories: 0.239006,
    food_calories: 0.000239,
    foot_pounds: 0.737562,
    british_thermal_units: 0.000948,
  },
  area: {
    square_millimeters: 10 ** 6,
    square_centimeters: 10000,
    square_meters: 1,
    hectares: 0.0001,
    square_kilometers: 0.000001,
    square_inches: 1550.003,
    square_feet: 10.76391,
    square_yards: 1.19599,
    acres: 0.000247,
    square_miles: 0.000000386102159,
  },
  speed: {
    centimeters_per_second: 100,
    meters_per_second: 1,
    kilometers_per_second: 3.6,
    feet_per_second: 3.28084,
    miles_per_hour: 2.237136,
    knots: 1.944012,
    mach: 0.002939,
  },
  time: {
    microseconds: 10 ** 6,
    milliseconds: 1000,
    seconds: 1,
    minutes: 0.016667,
    hours: 0.000278,
    days: 0.000012,
    weeks: 0.000002,
    years: 0.000000031688088,
  },
  power: {
    watts: 1,
    kilowatts: 0.001,
    horsepower_US: 0.001341,
    foot_pounds_per_minute: 44.25373,
  },
  data: {
    bits: 1,
    bytes: 0.125,
    kilobits: 0.001,
    kibibits: 0.000977,
    kilobytes: 0.000125,
    kibibytes: 0.000122,
    megabits: 0.000001,
    mebibits: 0.000000953674316,
    megabytes: 0.000000125,
    mebibytes: 0.00000011920929,
    gigabits: 0.000000001,
    gibibits: 0.000000000000931323,
    gigabytes: 0.000000000125,
    gibibytes: 0.000000000116415,
    terabits: 0.000000000001,
    tebibits: 0.000000000000909,
    terabytes: 0.000000000000125,
    tebibytes: 0.000000000000114,
  },
  pressure: {
    atmospheres: 0.00001,
    bars: 0.00001,
    kilopascals: 0.001,
    millimeters_of_mercury: 0.007502,
    pascals: 1,
    pounds_per_square_inch: 0.000145,
  },
  angle: {
    degrees: 1,
    radians: 0.017453,
    gradians: 1.111111,
  },
};

for (val in unitsandConversionFactors) {
  button = document.createElement("button");
  button.classList = "unitsBtn parentUnitsBtn";
  button.innerText = `${validateStr(val)}`;
  conversionUnitsbox.append(button);
}

window.onload = () => {
  bmiContainer.classList.remove("deactivate");
  outputContainer.classList.remove("deactivate");
  unitConversionContainer.classList.add("deactivate");
  allCalculatorBtnContainer.classList.add("deactivate");
  //active the mian opetion style effect for activated option
  [
    bmiContainer,
    outputContainer,
    allCalculatorBtnContainer,
    unitConversionContainer,
  ].forEach((element) => {
    if (!element.classList.contains("deactivate")) {
      mainOptions.forEach((val) => {
        str = element.classList[0];
        str2 = val.getAttribute("data-value");
        const ptrn = new RegExp(str2, "ig");
        if (str.match(ptrn)) {
          val.classList.add("active");
        }
      });
    }
  });
  //fill in length  element value as a default
  conUnitCont.forEach((container) => {
    container.innerHTML = "";
    for (units in unitsandConversionFactors["length"]) {
      let button = document.createElement("button");
      button.classList = "options unitsandValues";
      button.innerText = `${validateStr(units)}`;
      container.append(button);
    }
  });

  //activate parent button
  parentUnitsBtn.forEach((btn) => {
    if (btn.textContent == "Length") {
      btn.classList.add("active");
    }
  });
};

const parentUnitsBtn = document.querySelectorAll(".parentUnitsBtn");

darkModeBtn.addEventListener("click", () => {
  darkModeBtn.classList.toggle("active");
  if (darkModeBtn.classList.contains("active")) {
    darkText.innerText = "Dark";
    root.style.setProperty("--color-app", "#231e1b");
    root.style.setProperty("--color-body", "#1d2021");
    root.style.setProperty("--color-three", "#000000");
    root.style.setProperty("--color-four", "#888383");
    root.style.setProperty("--color-five", "#ffffff");
    root.style.setProperty("--color-color", "#ffffff");
  }
  if (!darkModeBtn.classList.contains("active")) {
    darkText.innerText = "Light";
    root.style.setProperty("--color-app", "#f2f2f2");
    root.style.setProperty("--color-body", "#e9e9e9");
    root.style.setProperty("--color-three", "#ffffff");
    root.style.setProperty("--color-four", "#000000");
    root.style.setProperty("--color-five", "#3d3d3d");
    root.style.setProperty("--color-color", "#000000");
  }
});

childSelectBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    childUnitContainer.forEach((child) => {
      if (btn === child.parentElement) {
        child.classList.toggle("active");
        backdrop.classList.toggle("visable");
      }
    });
  });
});

unitsandValues.forEach((option) => {
  option.addEventListener("click", () => {
    unitsandValues.forEach((btn) => {
      if (btn.parentElement === option.parentElement) {
        btn.classList.remove("active");
      }
    });
    option.classList.add("active");
    console.log("clicked");
  });
});

humbergerOption.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  backdrop.classList.toggle("visable");
});

mainOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    mainOptions.forEach((child) => {
      child.classList.remove("active");
    });
    btn.classList.add("active");
    optionsContainer.classList.toggle("active");
    backdrop.classList.remove("visable");
    const Datavalue = btn.getAttribute("data-value");
    {
      if (Datavalue === "bmi") {
        bmiContainer.classList.remove("deactivate");
        outputContainer.classList.remove("deactivate");
        unitConversionContainer.classList.add("deactivate");
        allCalculatorBtnContainer.classList.add("deactivate");
      }

      if (Datavalue === "conv") {
        bmiContainer.classList.add("deactivate");
        outputContainer.classList.add("deactivate");
        unitConversionContainer.classList.remove("deactivate");
        allCalculatorBtnContainer.classList.add("deactivate");
      }
      if (Datavalue === "calc") {
        bmiContainer.classList.add("deactivate");
        outputContainer.classList.remove("deactivate");
        unitConversionContainer.classList.add("deactivate");
        allCalculatorBtnContainer.classList.remove("deactivate");
      }
    }
  });
});

parentSelectBtn.addEventListener("click", () => {
  parentUnitContainer.classList.toggle("active");
  backdrop.classList.toggle("visable");
});

parentUnitsBtn.forEach((btn) => {
  btn.classList;
  btn.addEventListener("click", () => {
    let SelectedUnit = btn.innerText;
    phoneParentUnitSelect.textContent = SelectedUnit;
    parentUnitsBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.toggle("active");

    //fill child container values for unit container as per click

    conUnitCont.forEach((container) => {
      container.innerHTML = "";
      for (units in unitsandConversionFactors[reverseValidate(SelectedUnit)]) {
        let button = document.createElement("button");
        button.classList = "options unitsandValues";
        button.innerText = `${validateStr(units)}`;
        container.append(button);
      }
    });

    // remove parent visable and backdrop in mobile version

    parentUnitContainer.classList.toggle("active");
    backdrop.classList.remove("visable");

    // re Assign the values of units and value do it on last itration if possible
    unitsandValues = document.querySelectorAll(".options");
    unitsandValues.forEach((option) => {
      option.addEventListener("click", () => {
        unitsandValues.forEach((btn) => {
          if (btn.parentElement === option.parentElement) {
            btn.classList.remove("active");
          }
        });
        option.classList.add("active");
        let innerValue = option.innerText;
        console.log(innerValue);
        option.parentElement.parentElement.firstElementChild.textContent =
          innerValue;
      });
    });
  });
});

//fill child container of mass and height of bmi initially
bmiResultHeight.innerHTML = "";
for (units in unitsandConversionFactors["length"]) {
  if (
    units === "centimeters" ||
    units === "meters" ||
    units === "inches" ||
    units === "feet"
  ) {
    let button = document.createElement("button");
    button.classList = "options unitsandValues bmiUnitSelect";
    button.innerText = `${validateStr(units)}`;
    bmiResultHeight.append(button);
  }
}

bmiResultMass.innerHTML = "";
for (units in unitsandConversionFactors["weight_and_mass"]) {
  if (units === "kilograms" || units === "pounds") {
    let button = document.createElement("button");
    button.classList = "options unitsandValues bmiUnitSelect";
    button.innerText = `${validateStr(units)}`;
    bmiResultMass.append(button);
  }
}
// outputing for bmi
//
const inputHeight = document.querySelector(".inputHeight");
const inputMass = document.querySelector(".inputMass");
const UnitSelectButtons = document.querySelectorAll(".bmiUnitSelect");

UnitSelectButtons.forEach((val) => {
  console.log(val.textContent);
});

inputHeight.addEventListener("change", (event) => {
  console.log("change");
});

function bmiOperations(unitMass, unitHeight) {
  let mass = parseInt(inputMass.placeholder);
  let height = parseInt(inputHeight.placeholder);
  let siMass = siCalculator(mass, unitMass, "weight_and_mass");
  let siHeight = siCalculator(height, unitHeight, "length");
  outputContainer.firstElementChild.textContent = `${Math.round(
    calculateBodyMass(siMass, siHeight)
  )}`;
}

// output one.oninput
// outut two.oninut
// btn one.onselectchild
// btn two.onselectchild
//
// get value of both input one and two
// convert it to si
// feed it to
//  bmi calculator
//output it to output container

//backdrop stuff
backdrop.addEventListener("click", () => {
  backdropEffect.forEach((container) => {
    container.classList.remove("active");
  });
  backdrop.classList.remove("visable");
});

//  validate str

function validateStr(str) {
  removedAndStr = str.replace(/and/gi, `&`);
  let arrOfStr = removedAndStr.split(/_| /);
  let finalStr = arrOfStr
    .map((val) => {
      val = val.replace(val[0], val[0].toUpperCase());
      return val;
    })
    .join(" ");
  return finalStr;
}

function reverseValidate(str) {
  let arr = str.split(" ");

  let arr2 = arr.map((val) => {
    val = val.replace(val[0], val[0].toLowerCase());
    return val;
  });

  let str2 = arr2.join("_");

  str2 = str2.replace(/&/gi, "and");
  return str2;
}

function siCalculator(value, unit, parentUnit) {
  return value / unitsandConversionFactors[parentUnit][unit];
}
function siToTargate(value, unit, parentUnit) {
  return value * unitsandConversionFactors[parentUnit][unit];
}

function calculateBodyMass(mass, height) {
  return mass / height ** 2;
}
