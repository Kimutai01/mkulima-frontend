import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { GiPlantsAndAnimals } from "react-icons/gi";
const Maps = () => {
  return (
    <div className="bg-black h-full pb-10">
      <section className="flex flex-col my-2 justify-start ml-10 pt-10">
        <h1 className="  text-white font-bold text-4xl">
          Kenyan map with planted crops
        </h1>
      </section>
      <Map
        style={{
          margin: "auto",
          height: "400px",
          paddingBottom: "10px",
          cursor: "pointer",
          width: "50%",

          borderRadius: "5px",
        }}
        initialViewState={{
          latitude: 0.1768696,
          longitude: 37.9083264,
          zoom: 5,
        }}
        mapboxAccessToken={
          "pk.eyJ1IjoiYW5uZXRvdG9oIiwiYSI6ImNsYjB2cDl1dzFrOTQzcHFtOWdxcHBjbGgifQ.LADz9TYffPhRsjZ_O_hUHw"
        } // This is the token we got from Mapbox
        mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
      >
        <Marker
          latitude={-1.034864}
          longitude={37.073487}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p className="bg-red-600 font-bold px-2 py-1 text-white rounded-xl">
            Plants
          </p>
          <GiPlantsAndAnimals className="text-5xl text-red-600" />
        </Marker>
      </Map>
    </div>
  );
};

export default Maps;
