import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className="layout-container">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
