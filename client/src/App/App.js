import React, { useEffect, lazy, Suspense } from "react";
import { GlobalStyles } from "./global.styles";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./components/home-page/home-page.component";

const AuctionsListLazy = lazy(() =>
  import("./components/auctions-list/auctions-list.component")
);

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Suspense fallback={<div>...Loading</div>}>
          <Route path="/auctionsPage" component={AuctionsListLazy} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
