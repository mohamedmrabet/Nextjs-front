import Image from "next/image";
import React from "react";

export default function Placeholder() {
  const names = ["Small", "Medium", "Large"];
  const sizes = [
    { width: 20, height: 20, size: "w-20 h-20" },
    { width: 40, height: 40, size: "w-24 h-24" },
    { width: 52, height: 52, size: "w-32 h-32" },
  ];

  return (
    <div className="p-6">
      <div className="max-w-5xl ml-5 mt-3 bg-white p-8 rounded-lg">
        <section className="mb-6">
          <section className="mb-2">
            <h1 className="text-3xl font-bold text-black">Placeholder Logos</h1>
          </section>
          <section className="mb-2">
            <h2 className="text-xl font-medium text-gray-600">
              Use as image placeholder to represent a company or branded entity
            </h2>
          </section>
          <hr className="border-t-2 border-gray-300 " />
        </section>
        <section className="ml-[2cm] flex gap-[3cm]">
  <span className="inline-block rounded-md text-center">
    <h1 className="text-lg font-semibold">Small</h1>
  </span>
  <span className="inline-block rounded-md text-center">
    <h1 className="text-lg font-semibold">Medium</h1>
  </span>
  <span className="inline-block rounded-md text-center">
    <h1 className="text-lg font-semibold">Large</h1>
  </span>
</section>
        <div className="w-[529px] h-[300px] border border-dashed border-gray-300 rounded-[5px] p-4 mt-[38px]">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src="/assurance.png"
                  width={50}
                  height={50}
                  className="rounded-[5px]"
                  alt={`Placeholder ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-5xl ml-5 mt-3 bg-white p-8 rounded-lg">
        <section className="mb-6">
          <section className="mb-2">
            <h1 className="text-3xl font-bold text-black">Placeholder Logos</h1>
          </section>
          <section className="mb-2">
            <h2 className="text-xl font-medium text-gray-600">
              Use as image placeholder to represent a company or branded entity
            </h2>
          </section>
          <hr className="border-t-2 border-gray-300 mt-4" />
        </section>
        <section className="ml-[2.5cm] flex gap-[3cm]">
  <span className="inline-block rounded-md text-center">
    <h1 className="text-lg font-semibold">Small</h1>
  </span>
  <span className="inline-block rounded-md text-center">
    <h1 className="text-lg font-semibold">Medium</h1>
  </span>
  <span className="inline-block rounded-md text-center">
    <h1 className="text-lg font-semibold">Large</h1>
  </span>
</section>
        <div className="w-[720px] h-[350px] border border-dashed border-gray-300 rounded-[5px] p-6 mt-12">
          {[...Array(6)].map((_, rowIndex) => (
            <div key={rowIndex} className="ml-6 grid grid-cols-4 gap-6 mb-4">
              {sizes.map((size, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    src="/assurance.png"
                    width={size.width / 1.5}
                    height={size.height / 1.5}
                    className="rounded-[5px]"
                    alt={`Placeholder ${size}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
