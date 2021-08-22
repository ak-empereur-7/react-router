import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    /**
     * 「:名称」とすると動的パラメータで受取る
     */
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
