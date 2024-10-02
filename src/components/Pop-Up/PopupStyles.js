import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  
  popup: {
    position: "fixed",
    width: 300,
    background: "rgb(79, 197, 138)",
    border: "1px solid #ccc",
    boxShadow: "0 2px 10px rgba(255, 0, 0, 0.1)",
  },
  popupHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#bc9f8b",
    padding: 10,
    cursor: "move",
    color: "#000000",
  },
  popupContent: {
    padding: 20,
  },
});

export default useStyles;
