"use client"

import React from "react";
import HeroSection from "@/app/_components/HeroSection";
import Link from "next/link";
import PathLink from "@/app/_components/PathLink";
import useAppContext from "@/app/_hooks/useAppContext";

const PaymentSuccess = () => {
  const { form, productInCart, totalProductPrice } = useAppContext();

  return (
    <>
      <HeroSection
        backgroundImg="https://i.ibb.co/j8Wgp4T/payment-success-bg-1.jpg"
        content="Thanks for ordering"
        des="See you next time shopping!"
      />
      <section className="section--pay">
        <div className="container">
          <PathLink content="Payment Success" />
          <div className="line"></div>
          <div className="section--pay__wrapper success row">
            <div className="section--pay__bill l-8 m-8 c-12">
              <div className="notification">
                <div className="noti--icon  ">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="noti--letter">
                  <h2>Thank you for oder my shop</h2>
                  <h4>
                    A letter sent to your email
                    <br /> Please check your email!
                  </h4>
                </div>
              </div>
              <div className="line"></div>
              <div className="infor--user--wrapper">
                <div className="infor--user row">
                  <div className="infor--name l-6 m-5 c-12">
                    <h2>Customer information</h2>
                    <h4>{form.info.email}</h4>
                    <h4>{form.info.name}</h4>
                    <h4>{form.info.phone_number}</h4>
                  </div>
                  <div className="infor--method l-6 m-5 c-12">
                    <h2>Payment methods</h2>
                    <h4>{form.info.paymentMethod}</h4>
                  </div>
                  <div className="info--address l-6 m-5 c-12">
                    <h2>Address</h2>
                    <h4>{form.info.country}</h4>
                    <h4>{form.info.address}</h4>
                  </div>
                  <div className="info--delivery-method l-6 m-5 c-12">
                    <h2>Shipping method</h2>
                    <h4>Direct delivery</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="section--pay__info l-4 m-4 c-12">
              <div className="section--pay__info__wrapper">
                <div className="section--pay__list">
                  {productInCart &&
                    productInCart.map((product) => (
                      <div
                        className="section--pay__info--product"
                        key={product.product.id}
                      >
                        <div
                          className="pay--image"
                          style={{
                            backgroundImage: `url(${product.product.thumbnail})`,
                          }}
                        >
                          <p>{product.quantity}</p>
                        </div>
                        <div className="pay--des">
                          <h4>{product.product.name}</h4>
                        </div>
                        <div className="pay--price">
                          {product.product.price}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="line"></div>
                <div className="section--pay__info--total">
                  <h5>Total</h5>
                  <p>$ {totalProductPrice}</p>
                </div>
              </div>
            </div>
            <div
              className="continue--shopping__btn l-12 m-12 c-12"
              href="product.html"
            >
              <Link href="/products">
                <button className="btn btn--primary">Continue shopping</button>
              </Link>
              <Link href="/">
                <button className="btn btn--secondary">Home</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentSuccess;
