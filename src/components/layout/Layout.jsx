import { ProgressBar } from "../progressbar/ProgressBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <header>header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
};
