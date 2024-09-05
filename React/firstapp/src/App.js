const App = () => {
  return React.createElement(
    "div",
    {
      style: {
        color: "red",
        backgroundColor: "yellow",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "100vh",
        margin: "22vh auto ",
      },
    },
    null,
    React.createElement("h1", { style: { fontSize: "48px" } }, "LPU"),
    React.createElement(
      "h1",
      null,
      "Transforming Education, Transforming India"
    )
  );
};

export default App;
