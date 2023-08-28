import Nav from "@/components/Nav";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <section className="max-w-[1180px] mx-auto my-3 flex justify-between">
      <div className="-mt-1">
        <img src="./icons/logo.png" alt="logo"></img>
      </div>
      <Bars3BottomLeftIcon className="h-8 w-8 customLg:hidden mr-1" />
      <Nav />
    </section>
  );
}
