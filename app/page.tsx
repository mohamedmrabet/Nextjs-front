import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="p-5">
      <div className="text-left mb-8 py-5">
        <h1 className="text-4xl font-bold m-0">LOGO</h1>
      </div>

      <div className="flex flex-col gap-5">
        <section className="p-4 rounded-md">
          <h2 className="text-xl font-semibold m-0">WORDMARK AND MARK</h2>
        </section>
        <div>
          <section className="flex gap-4 w-full">
            <div className="bg-gray-100 p-4 rounded-md">
              <ol className="list-decimal pl-1 space-y-2 text-gray-400">
                <p className="font-medium">
                  Version 1: Used on white/bright backgrounds.
                </p>
                <p className="font-medium">
                  Version 2: Used on dark backgrounds.
                </p>
              </ol>
            </div>
          </section>
        </div>
        <section
          className="w-[8cm] h-auto ml-2 border border-dashed rounded-md flex flex-col gap-4 p-4"
          aria-label="Image placeholder"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/bp.png"
                alt="Buzzbip Logo"
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <span className="text-gray-700 font-medium">BUZZBIP</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/bp.png"
                alt="Buzzbip Logo"
                width={80}
                height={64}
                className="w-20 h-16"
              />
              <span className="text-gray-700 font-medium">BUZZBIP</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/bp.png"
                alt="Buzzbip Logo"
                width={80}
                height={64}
                className="w-20 h-16"
              />
              <span className="text-gray-700 font-medium">BUZZBIP</span>
            </div>
          </div>
        </section>
      </div>
      <div className="flex gap-4 pt-4 pl-16">
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/placeHolder">Place Holder Logo</Link>
  </button>
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/spacing">Spacing</Link>
  </button>
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/typography">Typography</Link>
  </button>
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/colors">Colors</Link>
  </button>
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/semantic">Semantic Colors</Link>
  </button>
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/flags">Flags</Link>
  </button>
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/icons">Icons</Link>
  </button>
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/outline">Icons Outline</Link>
  </button>
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/filed">Icons Filed</Link>
  </button>
  <button className="px-4 py-2 bg-[#a796a9] text-white rounded-md hover:bg-[#3a133d]">
    <Link href="/modals">Modals</Link>
  </button>
</div>
    </div>
  );
};

export default Page;
