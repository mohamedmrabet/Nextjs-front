import Image from "next/image";
import React from "react";

export default function Models() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Models</h1>
      </header>
      <div className="flex flex-col lg:flex-row gap-8 mb-4">
        <div className="flex-1 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Horizontal</h2>
        </div>
        <div className="flex-1 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Vertical</h2>
        </div>
      </div>
      <div className="border border-gray-600 rounded-lg p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      <Image 
                        src="/cup.png" 
                        alt="Model preview" 
                        width={24}
                        height={18}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800">A short model heading</h3>
                  </div>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 text-sm text-[#43444C] bg-white rounded-md">
                      Text button
                    </button>
                    <button className="px-4 py-2 text-sm text-[#43444C] bg-[#E1E2E8] rounded-full">
                      Tertiary button
                    </button>
                    <button className="px-4 py-2 text-sm text-white bg-[#7F51F2] rounded-full">
                      Primary button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>       
          <div className="flex-1">
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="w-full flex justify-center">
                  <div className="w-6 h-6">
                    <Image 
                      src="/cup.png" 
                      alt="Model preview" 
                      width={24}
                      height={18}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-800 text-center">A short model heading</h3>
                <div className="w-6 h-6 justify-end">
                    <Image 
                      src="/close.png" 
                      alt="Model preview" 
                      width={24}
                      height={18}
                    />
                  </div>
                <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
                <button className="w-full px-4 py-2 text-sm text-white bg-[#7F51F2] rounded-full">
                  Primary button
                </button>
                <div className="flex gap-3 justify-center">
                  <button className="w-2/3 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full">
                    Text button
                  </button>
                  <button className="px-4 py-2 text-sm text-[#43444C] rounded-md transition">
                    Tertiary button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}