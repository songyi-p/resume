import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Myeongjo&family=Noto+Sans+KR&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Gowun+Dodum&display=swap" rel="stylesheet"/>      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
