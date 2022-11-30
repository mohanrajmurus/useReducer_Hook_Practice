import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductContext from "./Context/Context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductContext>
      <App />
    </ProductContext>
  </StrictMode>
);
