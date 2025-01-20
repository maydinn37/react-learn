import { memo } from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, dispatch } = useAuth();
  const login = () =>
    dispatch({
      type: "LOGIN",
      payload: {
        name: "Mert",
        id: 1,
      },
    });
  const logout = () =>
    dispatch({
      type: "LOGOUT",
    });
  console.log("header rendering");
  return (
    <>
      <header>
        Header <br />
        {(user && <button onClick={logout}>Çıkış Yap</button>) || (
          <button onClick={login}>Giriş Yap</button>
        )}
        <hr />
        <SwitchTheme />
        <SwitchLanguage />
      </header>
      <br />
    </>
  );
}
export default memo(Header);
