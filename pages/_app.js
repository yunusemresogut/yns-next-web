import "../styles/globals.scss";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import configureStore from "../redux/reducers/configureStore";

const store = configureStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

const makesStore = () => store;
const wrapper = createWrapper(makesStore);

export default wrapper.withRedux(MyApp);
