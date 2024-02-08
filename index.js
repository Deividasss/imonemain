import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./app";
import './tailwind.css';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Analytics />
  </>
);
