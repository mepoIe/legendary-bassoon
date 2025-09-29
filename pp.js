const _header = document.querySelectorAll(".container > .header");

_header.forEach((h) => {
  toggleContent(h);
  toggleContent(h);
});

// Decimal

const _decimal = document.querySelectorAll(".decimal-buttons-grid > button");
const _decimalGrid = document.querySelectorAll(".decimal-input-wrapper")[0];
const _decimalEnter = document.querySelectorAll("#enterDecimalBtn")[0];

const _decimalLetter = document.createElement("div");
_decimalLetter.textContent = "-";
_decimalLetter.style.fontSize = "32px";
_decimalLetter.style.marginTop = "16px";
_decimalLetter.style.marginBottom = "-4px";
_decimalLetter.style.gridColumn = "2";
_decimalLetter.style.gridRow = "2";
_decimalLetter.style.alignSelf = "end";

_decimalEnter.insertAdjacentElement("afterend", _decimalLetter);

_decimalEnter.addEventListener("click", () => {
  _decimalLetter.textContent = "-";
});

_decimal.forEach((btn) => {
  btn.addEventListener("click", () => {
    let decimalInputString = "";
    let allFieldsFilled = true;

    for (let i = 0; i < decimalInputFields.length; i++) {
      if (decimalInputFields[i].value === "") {
        allFieldsFilled = false;
        break;
      }
      let value = decimalInputFields[i].value;
      if (value.length > 1 && value.startsWith("0")) {
        value = parseInt(value, 10).toString();
      }
      decimalInputString += value;
    }

    if (allFieldsFilled) {
      const originalDecimalValue = parseInt(decimalInputString, 10);

      if (isNaN(originalDecimalValue) || originalDecimalValue < 1) {
        _decimalLetter.textContent = "-";
        return;
      }

      let letterEquivalent = "";

      const effectiveValueForModulo = originalDecimalValue - 1;
      const remainderForLetter = (effectiveValueForModulo % 26) + 1;

      letterEquivalent = decimalMap[remainderForLetter.toString()] || "?";

      if (originalDecimalValue > 26) {
        _decimalLetter.textContent = `${remainderForLetter} \u00A0\u00A0 ${letterEquivalent}`;
      } else {
        _decimalLetter.textContent = `${letterEquivalent}`;
      }
    } else {
      _decimalLetter.textContent = "-";
    }
  });
});

// Binary

const _binary = document.querySelectorAll(".binary-buttons > button");
const _binaryGrid = document.querySelectorAll(".binary-input-grid")[0];
const _binaryEnter = document.querySelectorAll("#enterBinaryBtn")[0];
const _binaryFrame1 = document.querySelectorAll("#binaryFrame1")[0];

_binaryFrame1.style.height = "300px";

const _binaryLetter = document.createElement("div");
_binaryLetter.textContent = "-";
_binaryLetter.style.fontSize = "32px";
_binaryLetter.style.marginBottom = "10px";
_binaryGrid.insertAdjacentElement("afterend", _binaryLetter);

_binaryEnter.addEventListener("click", () => {
  _binaryLetter.textContent = "-";
});

_binary.forEach((btn) => {
  btn.addEventListener("click", () => {
    let binaryString = "";
    let allFieldsFull = true;

    for (let i = 0; i < binaryInputFields.length; i++) {
      if (binaryInputFields[i].value === "") {
        allFieldsFull = false;
        break;
      }
      binaryString += binaryInputFields[i].value;
    }

    if (allFieldsFull) {
      const outputLetter = binaryMap[binaryString] || "?";
      const decimalValue = parseInt(binaryString, 2);
      _binaryLetter.textContent = `${decimalValue} \u00A0\u00A0 ${outputLetter}`;
    } else {
      _binaryLetter.textContent = "-";
    }
  });
});

// Ternary

const _ternary = document.querySelectorAll(".ternary-buttons > button");
const _ternaryGrid = document.querySelectorAll(".ternary-input-grid")[0];
const _ternaryEnter = document.querySelectorAll("#enterTernaryBtn")[0];
const _ternaryFrame1 = document.querySelectorAll("#ternaryFrame1")[0];

_ternaryFrame1.style.height = "300px";

const _ternaryLetter = document.createElement("div");
_ternaryLetter.textContent = "-";
_ternaryLetter.style.fontSize = "32px";
_ternaryLetter.style.marginBottom = "10px";
_ternaryGrid.insertAdjacentElement("afterend", _ternaryLetter);

_ternaryEnter.addEventListener("click", () => {
  _ternaryLetter.textContent = "-";
});

_ternary.forEach((btn) => {
  btn.addEventListener("click", () => {
    let ternaryString = "";
    let allFieldsFull = true;

    for (let i = 0; i < ternaryInputFields.length; i++) {
      if (ternaryInputFields[i].value === "") {
        allFieldsFull = false;
        break;
      }
      ternaryString += ternaryInputFields[i].value;
    }

    if (allFieldsFull) {
      const outputLetter = ternaryMap[ternaryString] || "?";
      const decimalValue = parseInt(ternaryString, 3);
      _ternaryLetter.textContent = `${decimalValue} \u00A0\u00A0 ${outputLetter}`;
    } else {
      _ternaryLetter.textContent = "-";
    }
  });
});

// Hexadecimal

const _hexadecimal = document.querySelectorAll(
  ".hexadecimal-buttons-grid > button"
);
const _hexadecimalGrid = document.querySelectorAll(
  ".hexadecimal-input-wrapper"
)[0];
const _hexadecimalBack = document.querySelectorAll(
  "#hexadecimalBackspaceBtn"
)[0];
const _hexadecimalEnter = document.querySelectorAll("#enterHexadecimalBtn")[0];
const _hexadecimalFrame1 = document.querySelectorAll("#hexadecimalFrame1")[0];

_hexadecimalFrame1.style.height = "265px";

const _hexadecimalLetter = document.createElement("div");
_hexadecimalLetter.textContent = "-";
_hexadecimalLetter.style.fontSize = "32px";

_hexadecimalGrid.insertAdjacentElement("afterend", _hexadecimalLetter);

_hexadecimalEnter.addEventListener("click", () => {
  _hexadecimalLetter.textContent = "-";
});

const showHexa = () => {
  let hexString = "";
  let allFieldsFilled = true;

  for (let i = 0; i < hexadecimalInputFields.length; i++) {
    if (hexadecimalInputFields[i].value === "") {
      allFieldsFilled = false;
      break;
    }
    hexString += hexadecimalInputFields[i].value.toUpperCase();
  }

  if (allFieldsFilled) {
    const decimalValue = parseInt(hexString, 16);
    const outputLetter = hexadecimalLetterMap[hexString] || "?";

    _hexadecimalLetter.textContent = `${decimalValue} \u00A0\u00A0 ${outputLetter}`;
  } else {
    _hexadecimalLetter.textContent = "-";
  }
};

_hexadecimalBack.addEventListener("click", () => {
  showHexa();
});

_hexadecimal.forEach((btn) => {
  btn.addEventListener("click", () => {
    showHexa();
  });
});

// Morse

const _morse = document.querySelectorAll(".morse-buttons > button");
const _morseGrid = document.querySelectorAll(".morse-input-grid")[0];
const _morseEnter = document.querySelectorAll("#enterMorseBtn")[0];
const _morseFrame1 = document.querySelectorAll("#morseFrame1")[0];

_morseFrame1.style.height = "300px";

const _morseLetter = document.createElement("div");
_morseLetter.textContent = "-";
_morseLetter.style.fontSize = "32px";
_morseLetter.style.marginBottom = "10px";
_morseGrid.insertAdjacentElement("afterend", _morseLetter);

_morseEnter.addEventListener("click", () => {
  _morseLetter.textContent = "-";
});

_morse.forEach((btn) => {
  btn.addEventListener("click", () => {
    let currentSymbols = [];
    let allFieldsEmpty = true;

    for (let i = 0; i < morseInputFields.length; i++) {
      const symbol = morseInputFields[i].value;
      if (symbol !== "") {
        currentSymbols.push(symbol);
        allFieldsEmpty = false;
      }
    }

    if (!allFieldsEmpty) {
      const morseStringForLookup = currentSymbols.join(" ");
      const outputLetter = morseMap[morseStringForLookup] || "?";
      _morseLetter.textContent = outputLetter;
    } else {
      _morseLetter.textContent = "-";
    }
  });
});

// Braille

const _braille = document.querySelectorAll(".braille-dot");
const _brailleGrid = document.querySelectorAll(".braille-grid")[0];
const _brailleEnter = document.querySelectorAll("#enterBrailleBtn")[0];
const _brailleFrame1 = document.querySelectorAll("#brailleFrame1")[0];

_brailleFrame1.style.height = "290px";

const _brailleLetter = document.createElement("div");
_brailleLetter.textContent = "-";
_brailleLetter.style.fontSize = "32px";
_brailleGrid.insertAdjacentElement("afterend", _brailleLetter);

_brailleEnter.addEventListener("click", () => {
  _brailleLetter.textContent = "-";
});

_braille.forEach((dot) => {
  dot.addEventListener("click", () => {
    const sortedClickedDots = [...clickedBrailleDots].sort((a, b) => a - b);
    const inputKey = sortedClickedDots.join("");
    const outputLetter = brailleMap[inputKey] || "?";
    _brailleLetter.textContent = outputLetter;
  });
});

// Semaphore

const _semaphore = document.querySelectorAll(".semaphore-dot");
const _semaphoreEnter = document.querySelectorAll("#enterSemaphoreBtn")[0];

const _semaphoreLetter = document.createElement("div");
_semaphoreLetter.textContent = "-";
_semaphoreLetter.style.fontSize = "32px";
_semaphoreLetter.style.marginBottom = "40px";
_semaphoreEnter.insertAdjacentElement("beforebegin", _semaphoreLetter);

_semaphoreEnter.addEventListener("click", () => {
  _semaphoreLetter.textContent = "-";
});

_semaphore.forEach((dot) => {
  dot.addEventListener("click", () => {
    try {
      const dir1 = clickedSemaphoreDots[0].direction;
      const dir2 = clickedSemaphoreDots[1].direction;

      const inputKey = getSortedDirectionKey(dir1, dir2);
      const outputLetter = semaphoreMap[inputKey] || "?";

      _semaphoreLetter.textContent = outputLetter;
    } catch (error) {
      _semaphoreLetter.textContent = "-";
    }
  });
});

// Pigpen

const _pigpen = document.querySelectorAll(".pigpen-square");
const _pigpenEnter = document.querySelectorAll("#enterPigpenBtn")[0];
const _pigpenToggle = document.querySelectorAll("#togglePigpenDotBtn")[0];
const _pigpenButtons = document.querySelectorAll(".pigpen-controls")[0];
const _pigpenFrame1 = document.querySelectorAll("#pigpenFrame1")[0];

_pigpenFrame1.style.height = "290px";

const _pigpenLetter = document.createElement("div");
_pigpenLetter.textContent = "-";
_pigpenLetter.style.fontSize = "32px";
_pigpenButtons.insertAdjacentElement("beforebegin", _pigpenLetter);

_pigpenToggle.addEventListener("click", () => {
  try {
    const selectedSquare = pigpenSquares[activePigpenSquareIndex];
    const gridType = selectedSquare.dataset.gridType;
    const indexInGrid = selectedSquare.dataset.index;
    const dotState = dotToggledOn ? "D" : "N"; // "D" for dot, "N" for no dot

    const pigpenInputKey = `${gridType}_${indexInGrid}_${dotState}`;
    const outputLetter = pigpenMap[pigpenInputKey] || "?";
    _pigpenLetter.textContent = outputLetter;
  } catch (error) {
    _pigpenLetter.textContent = "-";
  }
});

_pigpenEnter.addEventListener("click", () => {
  _pigpenLetter.textContent = "-";
});

_pigpen.forEach((dot) => {
  dot.addEventListener("click", () => {
    try {
      const selectedSquare = pigpenSquares[activePigpenSquareIndex];
      const gridType = selectedSquare.dataset.gridType;
      const indexInGrid = selectedSquare.dataset.index;
      const dotState = dotToggledOn ? "D" : "N"; // "D" for dot, "N" for no dot

      const pigpenInputKey = `${gridType}_${indexInGrid}_${dotState}`;
      const outputLetter = pigpenMap[pigpenInputKey] || "?";
      _pigpenLetter.textContent = outputLetter;
    } catch (error) {
      _pigpenLetter.textContent = "-";
    }
  });
});
