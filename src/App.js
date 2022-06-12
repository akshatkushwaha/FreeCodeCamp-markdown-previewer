import "./App.css";
import { defaultText } from "./defaultText";
import { useState } from "react";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

function App() {
  const [text, setText] = useState(defaultText);

  return (
    <section className="app">
      <Editor text={text} setText={setText} />
      <Preview text={text} />
    </section>
  );
}

export default App;
