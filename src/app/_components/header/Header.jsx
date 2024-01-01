"use client";

import { useEffect, useState } from "react";
import HeaderBar from "./HeaderBar";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSignIn from "./HeaderSignIn";
import HeaderAccountIcon from "./HeaderAccountIcon.jsx";
import HeaderNavMb from "./HeaderNavMb";
import useAppContext from "@/app/_hooks/useAppContext";
import SignInForm from "@/app/_components/SignInForm";

const Header = () => {
  const [isShowHeader, setIsShowHeader] = useState(false);

  const { isShowNavBar, isShowSignIn, onShowNavBar, onShowSignIn } =
    useAppContext();

  const handleCloseNavBar = () => {
    onShowNavBar();
  };

  const handleCloseSignIn = () => {
    onShowSignIn();
  };

  // Thanh navbar
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsShowHeader(true);
      } else {
        setIsShowHeader(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="page-header--section">
      <div className={`page--header ${isShowHeader ? "bg" : ""}`}>
        <HeaderBar />
        <HeaderLogo />
        <div
          className={`overlay ${isShowNavBar ? "show--overlay" : ""}`}
          onClick={handleCloseNavBar}
        ></div>
        {/* PC */}
        <HeaderNav />
        <HeaderSignIn />
        <HeaderAccountIcon />
        {/* Mobile & Tablet */}
        <HeaderNavMb />
      </div>
      <SignInForm />
    </header>
  );
};

export default Header;
