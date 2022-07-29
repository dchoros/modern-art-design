import GlobalStyles from "./utils/GlobalStyles";
import favicon from "./utils/images/favicon.png"
import Favicon from "react-favicon";
import { BrowserRouter } from "react-router-dom";
import Router from "./routing/Router";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Favicon url={favicon} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
