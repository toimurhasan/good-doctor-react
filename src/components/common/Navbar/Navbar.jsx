import { Menubar } from "./Menubar";
import { LoginBtn } from "./LoginBtn";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 max-w-7xl mx-auto px-4 md:px-2 xl:px-0">
      <Logo />
      <div className="flex items-center gap-6">
        <Menubar />
        <LoginBtn />
      </div>
    </nav>
  );
};
