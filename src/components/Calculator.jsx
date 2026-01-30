import { useState } from "react";
import Button from "./Button";

const buttons = [
  "C", "+/-", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];

export default function Calculator() {
  const [value, setValue] = useState("0");

  const handleClick = (btn) => {
    if (btn === "C") return setValue("0");

    if (btn === "=") {
      try {
        const result = eval(
          value.replace(/×/g, "*").replace(/÷/g, "/")
        );
        setValue(result.toString());
      } catch {
        setValue("Error");
      }
      return;
    }

    if (btn === "+/-") {
      setValue((prev) =>
        prev.startsWith("-") ? prev.slice(1) : "-" + prev
      );
      return;
    }

    if (btn === "%") {
      setValue((prev) => (parseFloat(prev) / 100).toString());
      return;
    }

    setValue((prev) =>
      prev === "0" ? btn : prev + btn
    );
  };

  return (
    <div className="calculator">
      <div className="display">
        <span>{value}</span>
      </div>

      <div className="buttons">
        {buttons.map((b, i) => (
          <Button key={i} label={b} onClick={() => handleClick(b)} />
        ))}
      </div>
    </div>
  );
}
