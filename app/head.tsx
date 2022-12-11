import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Jargon App</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Jargon App" />
      <link rel="icon" href="/favicon.ico" />

      <Script>
        {`
    window.fwSettings={
      'widget_id':103000003003,
      'locale': 'en'
    };
    !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=     [],window.FreshworksWidget=n}}()`}
      </Script>
      <Script
        type="text/javascript"
        src="https://euc-widget.freshworks.com/widgets/103000003003.js"
        async
        defer
      />
    </>
  );
}
