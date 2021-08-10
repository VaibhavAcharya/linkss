import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Linkss</title>
        <meta
          name="description"
          content="Quick & Minimal Link Shorter Web Application."
        />

        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      {children}
    </>
  );
}
