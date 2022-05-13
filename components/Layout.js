import Footer from "./footer";
import Navigation from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}