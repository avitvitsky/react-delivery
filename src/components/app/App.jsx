import { Layout } from "../layout/Layout";
import { Restaurants } from "../restaurants/Restaraunts";
import { ThemeContextProvider } from "../theme-context/Theme-context";
import { UserContextProvider } from "../user-context/User-context";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import "./app.css";
import "./reset.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/homapage";
import { RestaurantPage } from "../../pages/restaurant-page";
import { MenuPage } from "../../pages/menu-page";
import { ReviewsPage } from "../../pages/reviews-page";
import { DishPage } from "../../pages/dish-page";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeContextProvider>
          <UserContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/restaurants" element={<Restaurants />}>
                  <Route index element={<div>Choose restaurant</div>} />
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path="/dish/:dishId" element={<DishPage />} />
                <Route path="/*" element={<div>Unknown page</div>} />
              </Route>
            </Routes>
          </UserContextProvider>
        </ThemeContextProvider>
      </Provider>
    </BrowserRouter>
  );
};
