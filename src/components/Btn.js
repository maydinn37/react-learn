import classNames from "classnames";

export default function Btn({ children, variant = "default" }) {
  return (
    <button
      className={classNames({
        "p-4 h-10 flex items-center rounded": true,
        "bg-gray-200": variant === "default",
        "bg-blue-500 text-white": variant === "Primary",
        "bg-yellow-500 text-yellow-800": variant === "Warning",
        "bg-red-600 text-white": variant === "Danger",
      })}
    >
      {children}
    </button>
  );
}
