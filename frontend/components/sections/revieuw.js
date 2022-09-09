import React from "react";
import NextImage from "../elements/image";
import Revieuws from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
function revieuw({data}) {
    
  return (
    <div className="bg-gray-300">
      <div className=" justify-center items-center">
        <div className="flex flex-wrap max-w-[1140px] py-20 lg:gap-10 lg:flex-nowrap h-fit container p-8 mx-auto xl:px-0">
          <div class="grid grid-cols-3">
            {data.cards.map((card) => {
                <div key={card.id} className="bg-blue-500/90 rounded-md text-white p-5">
                <div className="grid justify-center border-full pb-4">
                  <NextImage
                    media={card.Image}
                    alt="user"
                    height={200}
                    width={200}
                    className="rounded-full"
                    />
                </div>
                    
                <h3 className="text-2xl font-bold pb-4 pl-2">{card.Name}</h3>
                <p className="p-2">
                  {card.Opinion}
                </p>
                <Stack spacing={1}>
                  <Revieuws
                    className="p-2"
                    name="half-rating-read"
                    defaultValue={card.Rating}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default revieuw;