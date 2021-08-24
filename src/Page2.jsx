import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      <Link to="/page2/100">UrlParameter</Link>
      <br />
      <Link to="/page2/100?name=hogehoge">QueryParameter</Link>
    </div>
  );
};
