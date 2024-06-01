import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ContentWrapper from "../../wrappers/content-wrapper/contentWrapper";
import SwiperSlider from "../../wrappers/swiper-wrapper/swiper-slider/swiperSlider";
import SingleFounder from "./singleFounder";
import { founders } from "../../../../assets/data/foundersData";

const Founders = () => {
  
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    if (isSmallScreen) {
      setSlidesToShow(1);
    }
  }, [isSmallScreen]);

  return (
    <ContentWrapper>
      <div className="founders">
        <div className="heading">
          <span>Founders</span>
          <h2>Our Founders !</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            dignissimos quae ab id dicta earum nam, doloremque ipsum ea commodi
          </p>
        </div>
        <SwiperSlider slides={slidesToShow}>
          {founders.map((founder, index) => (
            <SingleFounder key={index} {...founder} />
          ))}
        </SwiperSlider>
      </div>
    </ContentWrapper>
  );
};

export default Founders;
