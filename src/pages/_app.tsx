import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Montserrat } from "next/font/google";

import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="data-theme">
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
