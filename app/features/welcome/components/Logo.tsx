import logoDark from "../../../../assets/logo-dark.svg";
import logoLight from "../../../../assets/logo-light.svg";

export default function Logo() {
  return (
    <div className="w-[500px] max-w-[100vw] p-4">
      <img
        src={logoLight}
        alt="React Router"
        className="block w-full dark:hidden"
      />
      <img
        src={logoDark}
        alt="React Router"
        className="hidden w-full dark:block"
      />
    </div>
  );
}
