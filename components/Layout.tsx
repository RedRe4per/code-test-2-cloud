import { ReactElement } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
