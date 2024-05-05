import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" grid  place-items-center md:grid-cols-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-lg">
      <h1 className="text-xl md:text-2xl lg:text-3xl  mt-5 font-bold text-white">
        Ignite your curiosity <br /> with our digital library.{" "}
      </h1>
      <div>
        <Image
          src={"/book.png"}
          alt="banner-image"
          width={0}
          height={0}
          sizes="100vw"
          //   style={{ width: "auto", height: "18rem" }}
          className="w-auto h-36 md:h-72"
        />
      </div>
    </div>
  );
};

export default Banner;
