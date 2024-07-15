import logo from "./assets/react.svg";

export default function Footer() {
  return (
    <footer className="bg-neutral flex items-center justify-center gap-6 mx-auto py-8 px-2">
      <img className="max-w-[70px] ml-2" src={logo} alt="Logo" />
      <small className="font-semibold sm:text-lg md:text-xl font-[lato] text-neutral-content">&copy; 2024 Articles Blog. All rights reserved.</small>
    </footer>
  );
}
