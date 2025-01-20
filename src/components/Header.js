import { memo } from "react";

function Header() {
  console.log("header rendering");
  return <header>Header</header>;
}
export default memo(Header);
