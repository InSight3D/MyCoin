import Footer from "./footer";
import Navigation from "./Header";

export default function Layout({ children }) {
    return (
      <>
           <Navigation />
            {children}
           <Footer />
      </>
    );}