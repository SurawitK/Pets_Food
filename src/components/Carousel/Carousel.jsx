import React from "react";
import styles from "./Carousel.module.css";

function Carousel() {
	const nextRef = React.useRef();
	const prevRef = React.useRef();
	React.useEffect(() => {
		const handleNextClick = () => {
		  const items = document.querySelectorAll('.item');
		  document.querySelector('.slide').appendChild(items[0]);
		};
	
		const handlePrevClick = () => {
		  const items = document.querySelectorAll('.item');
		  document.querySelector('.slide').prepend(items[items.length - 1]);
		};
	
		nextRef.current.addEventListener('click', handleNextClick);
		prevRef.current.addEventListener('click', handlePrevClick);
	
		// Clean up event listeners
		return () => {
		  nextRef.current.removeEventListener('click', handleNextClick);
		  prevRef.current.removeEventListener('click', handlePrevClick);
		};
	  }, []);
	

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div
          className={styles.item}
          style={{ backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)" }}>
          <div className={styles.content}>
            <div className={styles.name}>Switzerland</div>
            <div className={styles.des}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className={styles.item}
          style={{ backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)" }}>
          <div className={styles.content}>
            <div className={styles.des}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className={styles.item}
          style={{ backgroundImage: "url(https://i.ibb.co/NSwVv8D/img3.jpg)" }}>
          <div className={styles.content}>
            <div className={styles.name}>Iceland</div>
            <div className={styles.des}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className={styles.item}
          style={{ backgroundImage: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)" }}>
          <div className={styles.content}>
            <div className={styles.name}>Australia</div>
            <div className={styles.des}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className={styles.item}
          style={{ backgroundImage: "url(https://i.ibb.co/jTQfmTq/img5.jpg)" }}>
          <div className={styles.content}>
            <div className={styles.name}>Netherland</div>
            <div className={styles.des}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className={styles.item}
          style={{ backgroundImage: "url(https://i.ibb.co/RNkk6L0/img6.jpg)" }}>
          <div className={styles.content}>
            <div className={styles.name}>Ireland</div>
            <div className={styles.des}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
      </div>

      <div className={styles.button} ref={prevRef}>
        <button className={styles.prev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className={styles.next} ref={nextRef}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
