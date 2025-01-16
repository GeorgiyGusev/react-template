import Logo from "~/features/welcome/components/Logo";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-9">
      <Logo />
    </header>
  );
}