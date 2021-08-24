import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  /* useLocationというhooks使用することでクエリパラメータを使用できる
     useLocationに標準であるsearchという変数に「?=hogehoge〜」の文字列が入っている
  */
  const { search } = useLocation();
  /** JavaScriptの標準であるURLSearchParamsを使用することで「?=hogehoge〜」毎に取得できる*/
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>受け取ったパラメータは {id} です。</p>
      <p>受け取ったクエリパラメータは {query.get("name")} です。</p>
    </div>
  );
};
