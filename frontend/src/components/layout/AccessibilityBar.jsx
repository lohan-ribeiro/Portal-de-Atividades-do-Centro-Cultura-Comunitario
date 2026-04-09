import { useEffect, useState } from "react";
import "./AccessibilityBar.css"

export default function AccessibilityBar() {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Carregar preferências salvas
  useEffect(() => {
    const savedFont = localStorage.getItem("fontSize");
    const savedContrast = localStorage.getItem("contrast");
    const savedDark = localStorage.getItem("darkMode");

    if (savedFont) setFontSize(Number(savedFont));
    if (savedContrast) setContrast(savedContrast === "true");
    if (savedDark) setDarkMode(savedDark === "true");
  }, []);

  // Aplicar estilos no body
  useEffect(() => {
    document.body.style.fontSize = fontSize + "px";
    document.body.classList.toggle("high-contrast", contrast);
    document.body.classList.toggle("dark-mode", darkMode);

    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("contrast", contrast);
    localStorage.setItem("darkMode", darkMode);
  }, [fontSize, contrast, darkMode]);

  return (
    <div className="accessibility-bar">
      {/* Skip links */}
      <a href="#conteudo" className="skip-link">Ir para conteúdo</a>

      {/* Fonte */}
      <button onClick={() => setFontSize(fontSize - 2)}>A-</button>
      <button onClick={() => setFontSize(16)}>A</button>
      <button onClick={() => setFontSize(fontSize + 2)}>A+</button>

      {/* Tema */}
      <button className="button_dm" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Modo claro" : "Modo escuro"}
      </button>
    </div>
  );
}