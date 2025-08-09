import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>
        <Link to='/'>Cinemarker</Link>
      </div>

      <div>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
