import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      {/* 
        exactを付けるとpathと完全一致しているか見る
        <Route path="/">としてしまうと/配下が何であろうとHomeが表示される
      */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/Page1"
        /* 
          デフォルトでpropsを受取ることができる。 
          その中にあるmatchからurlを取り出す
          */
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.map}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/Page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
