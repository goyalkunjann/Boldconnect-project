import React from "react";
import Icon1 from "../../../assets/companyicons/icon1.png";
import Icon2 from "../../../assets/companyicons/icon2.jpg";
import Icon3 from "../../../assets/companyicons/icon3.png";
import Icon4 from "../../../assets/companyicons/icon4.png";
import Icon5 from "../../../assets/companyicons/icon5.png";
import Icon6 from "../../../assets/companyicons/icon6.png";
import Icon7 from "../../../assets/companyicons/icon7.png";

const iconData = [
  { src: Icon2, alt: "Icon 2", height: "h-10", marginTop: "" },
  { src: Icon3, alt: "Icon 3", height: "h-12", marginTop: "mt-2" },
  { src: Icon6, alt: "Icon 6", height: "h-12", marginTop: "mt-2" },
  { src: Icon7, alt: "Icon 7", height: "h-6", marginTop: "" },
  { src: Icon5, alt: "Icon 5", height: "h-6", marginTop: "" },
  { src: Icon1, alt: "Icon 1", height: "h-12", marginTop: "" },
  { src: Icon4, alt: "Icon 4", height: "h-8", marginTop: "" },
];

const Sponsors = () => {
  return (
    <div className="flex flex-row justify-between gap-20 items-center mx-10 my-20">
      {iconData.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className={`${icon.height} w-auto ${icon.marginTop}`}
        />
      ))}
    </div>
  );
};

export default React.memo(Sponsors);
