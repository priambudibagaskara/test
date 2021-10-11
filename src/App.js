import React from "react";
import { Helmet } from "react-helmet";

function App() {
  const metaTitle = "Sambungin akunmu, yuk!";
  const metaDescription = "Bisa dapat keuntungan ekstra, lho~";

  // const directToSuccessPage = () =>
  //   window.location.assign("https://www.tokopedia.com");

  // useEffect(directToSuccessPage, []);

  return (
    <>
      <Helmet>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tokopedia" />
        <meta name="twitter:creator" content="@tokopedia" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image:src"
          content="https://images.tokopedia.net/img/account-link/Gojek-x-Tokped-2x1.png"
        />
        <meta
          property="og:image"
          content="https://images.tokopedia.net/img/account-link/Gojek-x-Tokped-2x1.png"
        />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="Tokopedia" />
        <meta property="og:url" content={"https://www.tokopedia.com"} />
        <link rel="canonical" href={"https://www.tokopedia.com"} />
      </Helmet>
      <h1>hhe</h1>
    </>
  );
}

export default App;
