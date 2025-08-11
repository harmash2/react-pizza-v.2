import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Home</Link>
      <SearchOrder />
      <p>Dimon</p>
    </header>
  );
}

export default Header;
