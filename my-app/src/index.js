import ReactDOM from "react-dom";
import App from "./App";

/* function Panting(props) {
  const { url, title, authorName, profiledUrl, price } = props;
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Avtor: <a href={profiledUrl}>{authorName}</a>
      </p>
      <p>price: {price}many</p>
      <p>Доступність: закінчується або є в наявнсті</p>
      <button type="button">Додати до кошику</button>
    </div>
  );
} */
/* const panting = pantings[2];
ReactDOM.render(
  <Panting
    url={panting.url}
    title={panting.title}
    authorName={panting.author.tag}
    profiledUrl={panting.author.url}
    price={panting.price}
  />,
  document.querySelector("#root")
); */

ReactDOM.render(<App />, document.querySelector("#root"));
//======================================================================
/* import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */
