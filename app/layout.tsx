import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import AutoLogo from "@/components/logo-comp";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Product Catalog Auto",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <a className="" href="/">
                      <AutoLogo />
                    </a>
                  </div>
                  <div className="mx-auto">
                    <a href="/protected/catalog-preview" className="">
                      Product Catalog
                    </a>
                    <a href="" className="ml-5">
                      Audit Logs
                    </a>
                    <a href="/protected/catalog-upload" className="ml-5">
                      Upload Catalog
                    </a>
                  </div>
                  {<HeaderAuth />}
                </div>
              </nav>
              <div className="flex gap-20 max-w-9xl p-5">
                <div className="w-full">{children}</div>
              </div>

              <footer className="w-full flex items-center justify-center mx-auto text-center text-xs gap-8 py-5">
                <p>
                  Powered by{" "}
                  <span className="font-bold hover:underline" rel="noreferrer">
                    Supabase
                  </span>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
