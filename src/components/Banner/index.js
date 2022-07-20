import React from "react";
import { useAppContext } from "../../AppContext/Context";
import ImageUrl from "../ImageUrl";
import { ContainerBanner } from "./styles";

function Banner() {
  const { restaurants } = useAppContext();

  const att = restaurants.map((restaurant) => {
    return restaurant.attributes ? restaurant.attributes : [];
  });

  return (
    <ContainerBanner>
      <div className="contant-image">
        {att.map((item) => {
          return (
            <ImageUrl
              image={item.image.data[0].attributes.formats.thumbnail.url}
              key={item.name}
            />
          );
        })}
      </div>
    </ContainerBanner>
  );
}

export default Banner;
