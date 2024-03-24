import React from "react";
const BannerHeader = () => {
  return (
    <div className="flex w-full ">
      <div className="  flex w-full items-center  justify-center overflow-hidden bg-foreground sm:px-3.5   ">
        <div className="flex items-center gap-2 p-3">
          <p className=" text-center text-xs text-background">
            <strong className="font-semibold">
              Fee Shipping & Returns for all orders
            </strong>
          </p>
          <p className="text-primary-100  text-center text-xs text-background ">
            <strong className="font-semibold"> | </strong>
          </p>
          <p className=" text-primary-100  text-center text-xs text-background ">
            <strong className="font-semibold">
              Secure payments with G-Pay & Apple Pay
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
