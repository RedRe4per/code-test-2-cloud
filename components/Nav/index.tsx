import Button from "../Buttons";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Nav() {
  return (
    <section className="flex items-center">
      <ul className="capitalize flex text-heading-2">
        <li className="nav-title">about</li>
        <li className="nav-title">pricing</li>
        <li className="nav-title">search</li>
        <li className="nav-title">car2Cash</li>
        <li className="nav-title flex">
          <span>valuations</span>
          <ChevronDownIcon className="w-5 h-5" />
        </li>
        <li className="nav-title">blog</li>
        <li className="nav-title">contact us</li>
      </ul>
      <div className="ml-4">
        <Button color="signIn" size="signIn">
          Sign in
        </Button>
      </div>
    </section>
  );
}
