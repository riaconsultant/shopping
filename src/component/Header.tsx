import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      Shopping App
      <nav>
        <ul>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/list">My List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
