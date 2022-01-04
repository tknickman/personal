import { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";
import config from "../config";

const { THEMES } = config;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className={clsx(THEMES.DARK, "h-full")}>
        <Head />
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
