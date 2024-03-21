import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  ),
});
