import { Layout } from "../layout/Layout";
import { Restaurants } from "../restaurants/Restaraunts";

import "./app.css";
import "./reset.css";

export const App = () => {
  return (
    <Layout>
      <Restaurants />
    </Layout>
  );
};
