import React from "react";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b-2 border-b-[#002956] flex flex-col items-center py-4">
        <p className="text-[33px] font-bold text-[white] ">
          Intelligent System for Road Monitoring
        </p>
        <p className="text-[20px] font-semibold text-[white]">(IS4RM)</p>
      </div>
      <div className="mt-20 bg-[white] rounded-[30px] p-6  shadow-lg w-[80%] self-center">
        <h1 className="border-b-2 border-b-[black] w-[6%] text-[15px] font-bold mb-4 text-[black]">
          About:
        </h1>
        <p className="text-[15px] text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
          repellat ab quasi, saepe quo fuga quibusdam molestias enim est quidem
          consequuntur magnam possimus voluptatibus quas omnis facilis!
          Voluptate, quos neque! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Deserunt, repellat ab quasi, saepe quo fuga
          quibusdam molestias enim est quidem consequuntur magnam possimus
          voluptatibus quas omnis facilis! Voluptate, quos neque! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Deserunt, repellat ab
          quasi, saepe quo fuga quibusdam molestias enim est quidem consequuntur
          magnam possimus voluptatibus quas omnis facilis! Voluptate, quos
          neque!
        </p>
      </div>
    </div>
  );
};

export default About;
