import { useState } from "react";
import Button from "./Button";

const CRUSH_NAME = "Sahin"; // ❤️ yahan naam change kar sakte ho

const buttons = [
  "C", "+/-", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];

export default function Calculator() {
  const [value, setValue] = useState("0");
  const [showLove, setShowLove] = useState(false);
  const [showProposal, setShowProposal] = useState(false);

  const resetAll = () => {
    setShowLove(false);
    setShowProposal(false);
    setValue("0");
  };

  const handleClick = (btn) => {
    if (btn === "C") return resetAll();

    if (btn === "=") {
      // 💌 LOVE LETTER SECRET
      if (value === "100×2" || value === "100*2") {
        setShowLove(true);
        return;
      }

      // 💍 PROPOSAL SECRET
      if (value === "143") {
        setShowProposal(true);
        return;
      }

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
      setValue((v) => (v.startsWith("-") ? v.slice(1) : "-" + v));
      return;
    }

    if (btn === "%") {
      setValue((v) => (parseFloat(v) / 100).toString());
      return;
    }

    setValue((v) => (v === "0" ? btn : v + btn));
  };

  return (
    <>
      {/* 🧮 CALCULATOR */}
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

      {/* 💌 LOVE LETTER POPUP */}
      {showLove && (
        <div className="love-overlay">
          <div className="love-box">
            <button className="close-btn" onClick={resetAll}>✕</button>

            <h2>❤️ Meri {CRUSH_NAME} ❤️</h2>
            <p>
              I Love You {CRUSH_NAME},  
              <br /><br />
              Pata nahi ye baat kaise shuru karoon,  
              bas itna jaanta hoon ki  
              jab bhi tum saamne hoti ho,  
              duniya thodi zyada khoobsurat lagne lagti hai 🌸  
              <br /><br />
              Tumhari hasi meri favourite cheez hai,  
              aur tumhari baatein…  
              bina kisi wajah ke bhi  
              dil ko sukoon de jaati hain 💕  
              <br /><br />
              Main perfect nahi hoon,  
              par tumhare liye hamesha  
              sachcha, loyal aur dil se rehna chahta hoon.  
              Bas itna hi kehna tha…  
              <br /><br />
              <b>tum bahut special ho mere liye ❤️</b>
            </p>

            <span>— Sirf tumhara 💖</span>
          </div>
        </div>
      )}

      {/* 💍 PROPOSAL POPUP */}
      {showProposal && (
        <div className="love-overlay">
          <div className="love-box">
            <button className="close-btn" onClick={resetAll}>✕</button>

            <h2>💍 {CRUSH_NAME}, ek baat poochni hai… 💍</h2>
            <p>
              Agar main tumse ye kahoon ki  
              main apni zindagi ke har pal me  
              tumhe apne saath dekhna chahta hoon…  
              to kya ye galat hoga? 🥹  
              <br /><br />
              Main wada karta hoon  
              tumhara khayal rakhunga,  
              tumhari khushi meri priority hogi,  
              aur har mushkil me  
              tumhara haath thaam kar khada rahunga ❤️  
              <br /><br />
              {CRUSH_NAME},  
              kya tum mere saath  
              apni zindagi ka safar shuru karogi? 💖
            </p>

            <span>— Hamesha tumhara 😌💍</span>
          </div>
        </div>
      )}
    </>
  );
}
