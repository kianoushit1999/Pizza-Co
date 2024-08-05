import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      <Header />
      {isLoading && <Loader />}
      <main>
        <h2>CONTENT</h2>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
