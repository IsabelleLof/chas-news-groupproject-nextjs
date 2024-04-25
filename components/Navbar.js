import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { darkmodeTrue, darkModeFalse } from "@/redux/darkTheme";

export default function Navbar() {
  const state = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  function handleDarkMode() {
    state.darkMode ? dispatch(darkModeFalse()) : dispatch(darkmodeTrue());
  }

  return (
    <nav className="w-full flex items-center flex-col border-y-2">
      <div className="flex flex-row py-5">
        <ul className="flex flex-row gap-10">
          <li>
            <Link href="/category/world" className="navLink">
              News
            </Link>
          </li>
          <li>
            <Link href="/category/sports" className="navLink">
              Sports
            </Link>
          </li>
          <li>
            <Link href="/category/politics" className="navLink">
              Politics
            </Link>
          </li>
          <li>
            <Link href="/category/business" className="navLink">
              Business
            </Link>
          </li>
          <li>
            <Link href="/category/health" className="navLink">
              Health
            </Link>
          </li>
          <li>
            <Link href="/category/entertainment" className="navLink">
              Entertainment
            </Link>
          </li>
          <li>
            <Link href="/category/technology" className="navLink">
              Technology
            </Link>
          </li>
          <li>
            <Link href="/bookmarks/" className="navLink">
              Bookmarks
            </Link>
          </li>
        </ul>
        <button onClick={handleDarkMode} className="mx-8">
          {state.darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
