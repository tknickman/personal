import clsx from "clsx";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { THEMES } from "@tek/ui";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={clsx("scroll-smooth", THEMES.DARK)}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
