import { NextSeo } from "next-seo";
import AppLayout from "../layouts/AppLayout";
import { AppThemeProvider } from "../styles/AppThemeProvider";
function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Brawlhalla info"
        description="Info about Brawlhalla legends and rankings"
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
