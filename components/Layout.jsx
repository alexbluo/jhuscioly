import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen">
        <NavBar />
        <main className="container mx-auto p-16">{children}</main>
      </div>
      <Footer />
    </>
  );
}
