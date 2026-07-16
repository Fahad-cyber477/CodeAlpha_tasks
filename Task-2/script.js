let input = document.querySelector("input")
let button = document.querySelectorAll("button")

const operators = ["+", "-", "*", "/", "%", "."];

button.forEach((item) => {
    item.addEventListener("click", () => {
        let lastChar = input.value.slice(-1);
        let pressedButton = item.innerHTML;

        if (pressedButton == "AC") {
            input.value = "";
        }
        else if (pressedButton == "DEL") {
            input.value = input.value.slice(0, -1);
        }
        else if (pressedButton == "=") {
            if (input.value !== "") {
                try {
                    if (operators.includes(lastChar)) {
                        input.value = input.value.slice(0, -1);
                    }
                    input.value = eval(input.value);
                } catch (error) {
                    input.value = "Error";
                }
            }
        }
        else if (operators.includes(pressedButton)) {
            if (input.value === "") {
                if (pressedButton === "-") {
                    input.value = pressedButton;
                }
                return;
            }

            if (operators.includes(lastChar)) {
                input.value = input.value.slice(0, -1) + pressedButton;
            } else {
                input.value = input.value + pressedButton;
            }
        }
        else {
            input.value = input.value + pressedButton;
        }
    });
});