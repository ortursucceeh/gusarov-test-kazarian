import { useState } from "react";
import { Form } from "./components/Form";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className={theme}>
      <div className="switcher">
        <label htmlFor="theme">{theme}</label>
        <input id="theme" type="checkbox" onClick={switchTheme} />
      </div>

      <Form />
    </main>
  );
}

export default App;
