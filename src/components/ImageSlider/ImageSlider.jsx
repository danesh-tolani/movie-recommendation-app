import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSliderCard from "./ImageSliderCard";
import axios from "axios";
import { APIUrls } from "../../utils/APIUrls";

export default function ImageSlider() {
  const [sliderRef, setSliderRef] = useState(null);
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    await axios.get(APIUrls.nowPlayingAPI).then((response) => setMovies(response.data.results));
  }

  useEffect(() => {
    getMovies();
  }, []);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="content relative w-[100%]">
      <div className="controls">
        <button
          className="absolute z-10 left-0 top-[50%]"
          onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button
          className="absolute z-10 right-0 top-[50%]"
          onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider
        ref={setSliderRef}
        {...sliderSettings}>
        {movies.map((movie, index) => {
          return (
            <ImageSliderCard
              movie={movie}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
}
