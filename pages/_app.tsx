import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "../components/Navbar";
import { UserContext } from "../lib/context";

function MyApp({ Component, pageProps }) {
  return (
    // hard coded - will change
    <UserContext.Provider value={{ user: {}, username: "test" }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
