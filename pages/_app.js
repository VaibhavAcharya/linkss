import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";

import "./../styles/main.css";

function _App({ Component, pageProps }) {
  return (
    <Layout>
      <header>
        <Image src="/logo.svg" alt="Logo" width={48} height={48} />
        <h1>
          <mark>Comtute</mark>.
        </h1>
        <h3>
          Quick, Easy, Minimal{" "}
          <i>
            <u>Link Shorter</u>
          </i>
          .
        </h3>
        <p>
          <small>More like big alternative link generator lol 😅.</small>
        </p>
        <nav>
          <p>
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
            /{" "}
            <Link href="https://github.com/VaibhavAcharya/comtute">
              <a>Source @ Github</a>
            </Link>
          </p>
        </nav>
      </header>

      <Component {...pageProps} />
    </Layout>
  );
}

export default _App;
