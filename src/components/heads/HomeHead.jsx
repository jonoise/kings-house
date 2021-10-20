import Head from 'next/head'

const HomeHead = () => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <title>{"THE BEST F$%&#ING SANDWICH IN TOWN! 💣| King's House"}</title>
      <meta
        name="description"
        content="Cuidamos cada detalle, cada vegetal, caga gramo de harina en el pan para que nuestros clientes degusten un producto de calidad."
      ></meta>
      <meta name="keywords" content="Sandwich, San Ramón, Kings House"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:title"
        content="THE BEST F$%&#ING SANDWICH IN TOWN! 💣"
      ></meta>
      <meta
        property="og:description"
        content="Cuidamos cada detalle, cada vegetal, caga gramo de harina en el pan para que nuestros clientes degusten un producto de calidad."
      ></meta>
      <meta property="og:url" content="https://kingshousecr.com" />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/71573508/137668838-c8539b28-aa0a-4f97-98a9-5fdc27baed1c.png"
      ></meta>
      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:author" content="@soloamilkar"></meta>
    </Head>
  )
}

export default HomeHead
