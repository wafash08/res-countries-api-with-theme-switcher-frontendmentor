import Link from "next/link";
import { ThemeButton } from "./theme-button";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between h-20'>
      <h1 className='font-extrabold text-2xl dark:text-white'>
        <Link href='/'>Where in the world?</Link>
      </h1>
      <ThemeButton>dark mode</ThemeButton>
    </nav>
  );
}
