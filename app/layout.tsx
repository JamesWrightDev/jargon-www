import "./globals.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import Link from "next/link";
import Nav from "../components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="min-h-screen relative container mx-auto px-2 md:px-12 pb-4">
        <div>{children}</div>
        <footer className="absolute flex w-full left-0 bottom-5 px-2 md:px-12 ">
          <Link
            className="text-sm md:text-lg mr-3 md:mr-5 hover:underline"
            href="/privacy"
          >
            Privacy Policy
          </Link>
        </footer>
      </body>
    </html>
  );
}
