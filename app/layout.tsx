import type { Metadata } from "next";

import Footer from "App/components/footer";
import Navbar from "App/components/navbar";

import classNames from "classnames";

import { ApolloWrapper } from "./ApolloWrapper";

import "App/styles/globals.scss";

export const metadata: Metadata = {
  title: "Absinthe Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bodyClass = classNames(
    "min-h-screen",
    "flex flex-col justify-between",
    "bg-el dark:bg-el-dark",
    "text-primary dark:text-primary-dark text-sm font-inter"
  );

  return (
    <html lang="en" className="dark dark:custom-scrollbar-dark custom-scrollbar">
      <ApolloWrapper>
        <body>
          <main>
            <section className={bodyClass}>
              <Navbar />
              <div className="flex-grow px-8 lg:px-28 py-8">{children}</div>
              <Footer />
            </section>
          </main>
        </body>
      </ApolloWrapper>
    </html>
  );
}
