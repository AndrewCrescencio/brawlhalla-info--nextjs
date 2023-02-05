import { NextSeo } from "next-seo";
import AppLayout from "../layouts/AppLayout";
import { AppThemeProvider } from "../styles/AppThemeProvider";
function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        titleTemplate="Brawlhalla info | %s"
        defaultTitle="Brawlhalla info"
        description="Info about Brawlhalla legends and rankings"
        canonical="https://brawlhalla-info.vercel.app/"
        openGraph={{
          type: "website",
          url: "https://brawlhalla-info.vercel.app/",
          title: "Brawlhalla Info",
          description: "Info about Brawlhalla legends and rankings",
        }}
      />
      <AppThemeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppThemeProvider>
    </>
  );
}

export default App;
