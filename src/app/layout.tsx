import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Providers from "@/components/common/Provider";
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Super Social Media Downloader",
  description: "Super Social Media Downloader",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <main>
            <NavBar />
            <div className="mt-[82px] flex flex-col mx-4 md:mx-[50px] gap-[50px] md:gap-[160px] lg:mx-[150px]">
              {children}
            </div>
            <FooterSection />
          </main>
        </Providers>
        <script src="//code.tidio.co/xgyi2qd1nggw3p5ua7njiojcvhlyn51k.js" async></script>
      </body>
      <GoogleAnalytics gaId="G-RWTRF36D3N" />
      <GoogleTagManager gtmId="GTM-WL4JZPQH" />
    </html>
  );
}
