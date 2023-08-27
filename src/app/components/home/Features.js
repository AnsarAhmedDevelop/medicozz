"use client"
import React from "react";
import Title from "../Title";
import Card from "../home/Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
// import  featuresData  from "../home/FeatureData";

const featuresData = [
    {
      id: 1,
      title: "Business Stratagy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 2,
      icon: <AiFillAppstore />,
      title: "App Development",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 3,
      icon: <SiProgress />,
      title: "SEO Optimisation",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 4,
      icon: <FaMobile />,
      title: "Mobile Development",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 5,
      icon: <SiAntdesign />,
      title: "UX Design",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 6,
      icon: <FaGlobe />,
      title: "Hosting Websites",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
  ];

const Features = () => {
    // console.log(featuresData)
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
export default Features;