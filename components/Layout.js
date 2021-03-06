import Footer from "./Footer";
import Navigation from "./Header";
import { useRouter } from "next/router";
import PlatformNavigation from "./platform/Header";

export default function Layout({ children }) {
  const router = useRouter();
  if(router.pathname == "/" ) {
    return (
      <div className="flex flex-col min-h-screen justify-between">
        <Navigation />
        {children}
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col min-h-screen justify-between">
        <PlatformNavigation />
        {children}
        <Footer />
      </div>
    );
  }
}