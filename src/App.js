import "./App.css";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, BaseProvider, styled } from "baseui";

// Import redux store.
import store from "./redux/store";
import AppContainer from "./AppContainer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const engine = new Styletron();
  const Centered = styled("div", {
    alignItems: "center",
    height: "100%",
  });

  /*const [APIData, setAPIData] = useState(undefined);

  function callAPI() {
    axios
      .get("http://localhost:9000/testAPI")
      .then((response) => {
        // handle success
        setAPIData(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  useEffect(() => {
    callAPI();
  }, []);*/

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <Centered>
          <Router>
            <Provider store={store}>
              <AppContainer />
            </Provider>
          </Router>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
