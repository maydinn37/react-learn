import { useSite } from "../context/SiteContext";

export default function SwitchTheme() {
  const { theme, dispatch } = useSite();

  const switchTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <>
      Mevcut Tema: {theme} <br />
      <button onClick={switchTheme}>Tema Değiştir</button>
    </>
  );
}
