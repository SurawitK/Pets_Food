import React from "react";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <div class="container absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/2	w-[1000px] h-[600px] bg-[#f5f5f5] shadow-[0_30px_50px_#dbdbdb]">
      <div class="slide">
        <div
          class="item w-[200px] h-[300px] absolute top-1/2 translate-x-0 translate-y--1/2 rounded-[20px] shadow-[0_30px_50px_#505050] bg-[50%_50%] bg-cover inline-block transition-all duration-500 "
          style="background-image: url(https://i.ibb.co/qCkd9jS/img1.jpg);">
          <div class="content">
            <div class="name">Switzerland</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          class="item"
          style="background-image: url(https://i.ibb.co/jrRb11q/img2.jpg);">
          <div class="content">
            <div class="name">Finland</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          class="item"
          style="background-image: url(https://i.ibb.co/NSwVv8D/img3.jpg);">
          <div class="content">
            <div class="name">Iceland</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          class="item"
          style="background-image: url(https://i.ibb.co/Bq4Q0M8/img4.jpg);">
          <div class="content">
            <div class="name">Australia</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          class="item"
          style="background-image: url(https://i.ibb.co/jTQfmTq/img5.jpg);">
          <div class="content">
            <div class="name">Netherland</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          class="item"
          style="background-image: url(https://i.ibb.co/RNkk6L0/img6.jpg);">
          <div class="content">
            <div class="name">Ireland</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
      </div>

      <div class="button">
        <button class="prev">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button class="next">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
