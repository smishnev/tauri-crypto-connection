import { IconSettings } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:text-green-500">
        Home
      </Link>{" "}
      <Link to="/bybit" className="[&.active]:text-green-500">
        Bybit
      </Link>
      <Link to="/binance" className="[&.active]:text-green-500">
        Binance
      </Link>
      <Link to="/settings" className="[&.active]:text-green-500">
        <IconSettings />
      </Link>
    </div>
  );
};
