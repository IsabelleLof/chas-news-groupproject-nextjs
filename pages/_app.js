import "@/styles/globals.css";
import { Provider, useSelector } from "react-redux";
import store from "@/redux/store";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  const state = useSelector((state) => state.darkMode);

  useEffect(() => {
    state.darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [state]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <>
    <Provider store={store}>
      <App Component={Component} pageProps={pageProps}></App>
    </Provider>
  </>
);
