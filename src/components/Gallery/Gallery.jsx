import React from "react";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className="m-2 grid grid-rows-2 grid-cols-2 grid-flow-row gap-4 auto-rows-fr">
      <div className="col-span-full row-span-1 md:row-span-2 overflow-hidden">
        <div className="bg-white overflow-hidden rounded-lg">
          <img
            className="rounded-lg hover:scale-105 overflow-hidden transition-all w-full"
            src="https://source.unsplash.com/random/?1"
            alt=""
          />
        </div>
        <p>Dog Toys</p>
      </div>
      <div className="row-start-2 row-span-1">
        <div className="bg-white transition-all overflow-hidden rounded-lg">
          <img
            className="overflow-hidden rounded-lg hover:scale-110 transition-all w-full"
            src="https://source.unsplash.com/random/200x200/?2"
            alt=""
          />
        </div>
        <p>02</p>
      </div>
      <div className="row-start-2 row-span-1 ">
        <div className="bg-white transition-all overflow-hidden rounded-lg">
          <img
            className="overflow-hidden rounded-lg hover:scale-110 transition-all w-full"
            src="https://source.unsplash.com/random/200x200/?3"
            alt=""
          />
        </div>
        <p>03</p>
      </div>
    </div>
  );
}

export default Gallery;
