import Image from "next/image";
import React from "react";

const Page: React.FC = () => {
  const images = Array(34).fill("/avatar.png");
  const names = ["Extra Small", "Small", "Medium", "Large"];
  const sizes = [
    { width: 90, height: 90, size: "w-20 h-20" },
    { width: 100, height: 100, size: "w-24 h-24" },
    { width: 150, height: 150, size: "w-32 h-32" },
    { width: 180, height: 180, size: "w-36 h-36" },
  ];

  return (
    <div className="p-6">
      <div className="max-w-5xl ml-5 mt-3 bg-white p-8 rounded-lg">
        <section className="mb-6">
          <section className="mb-2">
            <h1 className="text-3xl font-bold text-black">Avatars</h1>
          </section>
          <section className="mb-2">
            <h1 className="text-3xl font-bold text-black">
              To be used in cards and profile pages.
            </h1>
          </section>
        </section>
        <section className="border-dashed border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {names.map((name, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <h3 className="text-lg font-medium text-black mb-2">{name}</h3>
              <div
                className={`flex justify-center items-center p-4 rounded-full border-2 border-purple-500 ${sizes[index].size}`}
              >
                <Image
                  src="/avatar.png"
                  alt="Buzzbip Logo"
                  width={sizes[index].width}
                  height={sizes[index].height}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </section>
        <div className="mt-12">
          <section className="mb-6">
            <section className="mb-2">
              <h1 className="text-3xl font-bold text-black">Avatar Image</h1>
            </section>
          </section>
          <div className="w-[1080px] h-[240px] border border-gray-300 rounded-[5px] relative">
            <div className="flex justify-start space-x-4 absolute top-[60px] left-[15px]">
              {images.slice(0, 17).map((image, index) => (
                <div key={index} className="flex justify-center items-center p-2">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-[30px] h-[30px] rounded-[5px]"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-start space-x-4 absolute top-[140px] left-[15px]">
              {images.slice(17, 34).map((image, index) => (
                <div key={index} className="flex justify-center items-center p-2">
                  <img
                    src={image}
                    alt={`Image ${index + 18}`} 
                    className="w-[30px] h-[30px] rounded-[5px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
