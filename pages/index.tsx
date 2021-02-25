import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      {/* <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "testuser123" },
        }}
      >
        <a>Test profile</a>
      </Link> */}
      <Loader show={true} />
    </div>
  );
}
