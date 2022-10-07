import React from "react";
import { useRouter } from "next/router";
import ButtonLink from "../elements/button-link";
import { getButtonAppearance } from "utils/button";
import NextImage from "../elements/image";

function Thankyou({ data }) {
    const router = useRouter();
    setTimeout(function(){
        router.push("/");
     }, 5000);
  return (
    <div className=" w-screen grid place-content-center">
      <NextImage media={data.image} width="1920" height="1080" alt="Hero jpeg" />
    </div>
  );
}

export default Thankyou;
