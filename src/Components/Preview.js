import { marked } from "marked";
function Preview(props) {
  const previewContainer = {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const preview = {
    width: "100%",
    height: "100%",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    overflow: "scroll",
  };

  const html = marked(props.text);
  document.getElementById("preview").innerHTML = html;

  return (
    <section className="previewContainer" style={previewContainer}>
      <h1>Preview</h1>
      <div id="preview" style={preview}></div>
    </section>
  );
}

export default Preview;
