import { Layout } from "../layout/Layout";
import { Restaurants } from "../restaurants/Restaraunts";
import { ThemeContextProvider } from "../theme-context/Theme-context";
import { UserContextProvider } from "../user-context/User-context";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import "./app.css";
import "./reset.css";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
