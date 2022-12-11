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
      <body className="min-h-screen relative container mx-auto ">
        <div>{children}</div>
        <footer className="flex w-screen absolute bottom-5">
          <Link className="text-lg mx-5 hover:underline" href="/support">
            Support
          </Link>
          <Link className="text-lg mx-5 hover:underline" href="/privacy">
            Privacy Policy
          </Link>
        </footer>
      </body>
    </html>
  );
}
