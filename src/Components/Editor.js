function Editor(props) {
  //styles
  const editorStyle = {
    width: "100%",
    height: "90%",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "sans-serif",
    lineHeight: "1.5",
    overflow: "scroll",
    borderRadius: "4px",
  };

  const editorContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: "100%",
  };

  return (
    <section style={editorContainerStyle}>
      <h1>Editor</h1>
      <textarea
        id="editor"
        onChange={(e) => {
          props.setText(e.target.value);
        }}
        type="text"
        value={props.text}
        style={editorStyle}
      />
    </section>
  );
}

export default Editor;
