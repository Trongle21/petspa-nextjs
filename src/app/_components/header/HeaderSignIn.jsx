import React from "react";
import Button from "../Button";
import useAppContext from "@/app/_hooks/useAppContext";

const HeaderSignIn = () => {
  const { onShowSignIn } = useAppContext();

  return (
    <div className="header--sign-in">
      <Button
        className="btn btn--primary"
        content="Sign In"
        onClick={onShowSignIn}
      />
    </div>
  );
};

export default HeaderSignIn;
