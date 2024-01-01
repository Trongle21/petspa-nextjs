import React, { useState } from "react";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from "@/app/_components/FormControl";
import useAppContext from "@/app/_hooks/useAppContext";
import Link from "next/link";

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

const SectionServiceBook = () => {
  const [chooseShopAddress, setChooseAddress] = useState("Hai Duong");
  const [choosePetType, setChoosePetType] = useState("cat");
  const [chooseGender, setChooseGender] = useState("male");
  const { isShowServiceBook, onShowServiceBook } = useAppContext();

  const methods = useForm({
    resolver: zodResolver(contactForm),
    defaultValues: {
      info: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        schedule_date: "",
        pet_name: "",
        pet_birthday: "",
      },
    },
  });

  const handleTakeDataService = (data) => {
    console.log(data);
  };

  return (
    <section className="section--service__book">
      <div className="container">
        <h2>REQUEST A MEET & GREET</h2>
        <h6>
          Ready to bring your pup in for day care? Please complete the form{" "}
          <br />
          below to schedule your dog is Meet & Greet.
        </h6>
        <FormProvider {...methods}>
          <form
            className="service--form"
            onSubmit={methods.handleSubmit((data) => {
              data.info.address_shop = chooseShopAddress;
              data.info.type_of_pet = choosePetType;
              data.info.gender = chooseGender;

              handleTakeDataService(data);
            })}
          >
            <div
              className={`contact--form__info first service--book ${
                isShowServiceBook &&
                methods.watch("info.first_name") !== "" &&
                methods.watch("info.last_name") !== "" &&
                methods.watch("info.email") !== "" &&
                methods.watch("info.phone_number") !== "" &&
                methods.watch("info.schedule_date") !== ""
                  ? "slide--top"
                  : ""
              }`}
            >
              <div className="contact--form row">
                <div className="contact--form__list l-6 m-6 c-12">
                  <FormControl
                    label="First Name"
                    name="info.first_name"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="contact--form__list l-6 m-6 c-12">
                  <FormControl
                    label="Last Name"
                    name="info.last_name"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="contact--form__list l-6 m-6 c-12">
                  <FormControl
                    label="Email"
                    name="info.email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="contact--form__list l-6 m-6 c-12">
                  <div className="contact--form__list--wrapper">
                    <FormControl
                      label="Phone Number"
                      name="info.phone_number"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="contact--form__list l-6 m-6 c-12">
                  <div className="contact--form__list--wrapper">
                    <label htmlFor="location" className="form-label">
                      Shop address
                    </label>
                    <select
                      id="location"
                      value={chooseShopAddress}
                      onChange={(e) => setChooseAddress(e.target.value)}
                    >
                      <option value="hai duong">Hai Duong</option>
                      <option value="ha noi">Ha Noi</option>
                      <option value="hai phong">Hai Phong</option>
                    </select>
                    <span className="form-message"></span>
                  </div>
                </div>
                <div className="contact--form__list l-6 m-6 c-12">
                  <div className="contact--form__list--wrapper">
                    <FormControl
                      type="date"
                      label="Schedule Date"
                      name="info.schedule_date"
                    />
                  </div>
                </div>
              </div>
              <div className="service--book_btn first">
                <button
                  className="btn btn--primary"
                  onClick={onShowServiceBook}
                >
                  <h5>Continue</h5>
                </button>
              </div>
            </div>
            <div
              className={`contact--form__info second service--book ${
                isShowServiceBook &&
                methods.watch("info.first_name") !== "" &&
                methods.watch("info.last_name") !== "" &&
                methods.watch("info.email") !== "" &&
                methods.watch("info.phone_number") !== "" &&
                methods.watch("info.schedule_date") !== ""
                  ? ""
                  : "slide--bottom"
              }
              `}
            >
              <div className="contact--form row">
                <div className="contact--form__list l-6 m-6 c-12">
                  <div className="contact--form__list--wrapper">
                    <FormControl
                      label="Pet's Name"
                      name="info.pet_name"
                      placeholder="Enter your pet's name"
                    />
                  </div>
                </div>
                <div className="contact--form__list l-6 m-6 c-12">
                  <div className="contact--form__list--wrapper">
                    <label htmlFor="type_of_pet" className="form-label">
                      Type Of Pet
                    </label>
                    <select
                      id="type_of_pet"
                      value={choosePetType}
                      onChange={(e) => setChoosePetType(e.target.value)}
                    >
                      <option value="cat">Cat</option>
                      <option value="dog">Dog</option>
                    </select>
                    <span className="form-message"></span>
                  </div>
                </div>
                <div className="contact--form__list l-6 m-6 c-12">
                  <div className="contact--form__list--wrapper">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      id="gender"
                      value={chooseGender}
                      onChange={(e) => setChooseGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <span className="form-message"></span>
                  </div>
                </div>
                <div className="contact--form__list l-6 m-6 c-12">
                  <div className="contact--form__list--wrapper">
                    {" "}
                    <FormControl
                      type="date"
                      label="Pet's Birthday"
                      name="info.pet_birthday"
                    />
                  </div>
                </div>
              </div>
              <div className="service--book_btn second">
                <div className="btn btn--secondary" onClick={onShowServiceBook}>
                  <h4>Come Back</h4>
                </div>
                <button type="submit" className="btn btn--primary link">
                  <Link href="/service/serviceBook/serviceBookSuccess">
                    <h5>Continue</h5>
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default SectionServiceBook;
