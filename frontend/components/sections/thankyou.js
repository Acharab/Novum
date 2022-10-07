import React from "react";
import { useRouter } from "next/router";
import ButtonLink from "../elements/button-link";
import { getButtonAppearance } from "utils/button";

function Thankyou({ data }) {
    const router = useRouter();
    setTimeout(function(){
        router.push("/");
     }, 5000);
  return (
    <div className="h-[60vh] w-screen grid place-content-center">
      <h1 className="text-4xl px-4 flex justify-center text-center">{data.title}</h1>
      <div className="w-full justify-center flex pt-7">
        <div className="w-[25%]">
          <ButtonLink
            button={data.links}
            appearance={getButtonAppearance("blue", "blue")}
            compact
          />
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
