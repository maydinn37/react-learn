import { useSite } from "../context/SiteContext";

export default function SwitchLanguage() {
  const { language, dispatch } = useSite();

  const SwitchLanguage = () => {
    dispatch({
      type: "TOGGLE_LANGUAGE",
    });
  };
  return (
    <>
      <br />
      Mevcut Dil: {language} <br />
      <button onClick={SwitchLanguage}>Dil Değiştir</button>
    </>
  );
}
