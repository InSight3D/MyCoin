import Footer from "./Footer";
import Navigation from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}