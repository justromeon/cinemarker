import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black p-4 md:py-4 md:px-8 flex justify-between items-center shadow-md">
      <div className="text-2xl max-md:text-xl font-bold">
        <Link to='/'>Cinemarker</Link>
      </div>

      <div className="flex gap-8 max-md:gap-4">
        <Link className="text-base py-2 px-4 max-md:p-2 rounded-md transition-colors duration-200 hover:bg-white/10" to='/'>Home</Link>
        <Link className="text-base py-2 px-4 max-md:p-2 rounded-md transition-colors duration-200 hover:bg-white/10" to='/favorites'>Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
