import React, { useState } from "react";
import useAppContext from "@/app/_hooks/useAppContext";
import Link from "next/link";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from "@/app/_components/FormControl";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const contactForm = z.object({
  info: z.object({
    email: z
      .string({ required_error: "Bạn chưa nhập email" })
      .min(8, { message: "Email phải có ít nhất 8 ký tự" })
      .email({ message: "Bạn chưa nhập email" })
      .trim(),
    password: z
      .string({ required_error: "Bạn chưa nhập password" })
      .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" })
      .trim(),
  }),
});

const SignInForm = () => {
  const { isShowSignIn, onShowSignIn } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);
  const { onTakeInfoUser } = useAppContext();

  const methods = useForm({
    resolver: zodResolver(contactForm),
    defaultValues: {
      info: {
        email: "",
        password: "",
      },
    },
  });

  const handleTakeData = (data) => {
    onTakeInfoUser(data);
  };

  return (
    <div className="main--account">
      <div
        className={`overlay ${isShowSignIn ? "show--overlay" : ""}`}
        onClick={onShowSignIn}
      ></div>
      <div className="main--account__signIn">
        <FormProvider {...methods}>
          <form
            className={`main--account_sigIn--wrapper l-4 m-6 c-8 ${
              isShowSignIn ? "show" : ""
            }`}
            onSubmit={methods.handleSubmit((data) => {
              handleTakeData(data);
            })}
          >
            <div className="main--account__form-group">
              <FormControl
                label="Email"
                name="info.email"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="main--account__form-group">
              <FormControl
                label="Password"
                name="info.password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <div
                className="show--password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>
            <div className="main--account__check">
              <div className="main--account__check--input">
                <input id="checkRemember" type="checkbox" />
                <label htmlFor="checkRemember">Remember me</label>
              </div>
              <Link href="">Forgot password</Link>
            </div>
            <div className="main--account__submit">
              <button className="btn btn--signIn" type="submit">
                <Link href="">Sign In</Link>
              </button>
            </div>
            <div className="main--account_signUp">
              <h5>Don`t have a account?</h5>
              <Link href="/signIn" onClick={onShowSignIn}>
                Sign up
              </Link>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignInForm;
