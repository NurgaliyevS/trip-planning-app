import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="fantasy" className="scroll-smooth">
      <Head>
        <meta
          name="description"
          content="Plan your trips easily with TripPlanss. Track travel dates, locations, and notes all in one place. Enjoy stress-free travel planning."
        />
        <meta
          name="keywords"
          content="how to plan a trip with multiple destinations, how to plan a road trip with multiple stops, how to plan a trip with friends"
        />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="TripPlanss" />
        <meta name="application-name" content="TripPlanss" />
        <meta
          property="og:title"
          content="TripPlanss - Plan a trip with multiple destinations"
        />
        <meta
          property="og:description"
          content="Plan your trips easily with TripPlanss. Track travel dates, locations, and notes all in one place. Enjoy stress-free travel planning."
        />
        <meta property="og:url" content="https://tripplanss.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TripPlanss" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://tripplanss.com/og-image.png"
        />
        <meta
          property="og:image:alt"
          content="TripPlanss - how to plan a trip with multiple destinations"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="article:author"
          content="https://x.com/tech_nurgaliyev"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tech_nurgaliyev" />
        <meta name="twitter:creator" content="@tech_nurgaliyev" />
        <meta
          name="twitter:title"
          content="TripPlanss - Plan a trip with multiple destinations"
        />
        <meta
          name="twitter:description"
          content="Plan your trips easily with TripPlanss. Track travel dates, locations, and notes all in one place. Enjoy stress-free travel planning."
        />
        <meta
          name="twitter:image"
          content="https://tripplanss.com/twitter.png"
        />

        <link rel="canonical" href="https://tripplanss.com/" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
