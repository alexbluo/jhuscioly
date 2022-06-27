import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen">
        <NavBar />
        <main className="container mx-auto px-16 py-8">{children}</main>
      </div>
      <Footer />
    </>
  );
}
