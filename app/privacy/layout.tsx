import Nav from "../../components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-5 pb-12">
      <Nav />
      {children}
    </div>
  );
}
