import { Layout } from "../layout/Layout";
import { Restaurants } from "../restaurants/Restaraunts";
import { ThemeContextProvider } from "../theme-context/Theme-context";

import "./app.css";
import "./reset.css";

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Restaurants />
      </Layout>
    </ThemeContextProvider>
  );
};
