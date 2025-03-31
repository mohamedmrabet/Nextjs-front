import Link from "next/link";

export default function Typography() {


  return (
    <div>
      <div className="pt-3">
        <h1 className="text-7xl font-bold">Typography</h1>
        <section className="pt-5">
          <div className="w-full max-w-[1251px] h-[200px] pb-6 gap-6 rounded-2xl p-6 flex">
            <div className="w-[236px] h-[154px] rounded-xl p-[56px] gap-[16px] bg-[#6E82FE] flex items-center justify-center">
              <p className="text-white text-5xl">Aa</p>
            </div>
            <div className="flex flex-col justify-center ml-6">
              <span className="text-4xl font-bold">Parkinsans</span>
              <span className="text-right text-4xl text-gray-400">6 font weights available</span>
              <span className="underline text-blue-500">
                <Link href="">Download Link</Link>
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="rounded-2xl p-6">
        <h3 className="text-2xl font-bold">Rem base Size</h3>
        <h4>Helps with accessibility</h4>
        <div className="pt-4">
          <section className="w-[17cm] h-[2cm] bg-black flex items-center p-9 text-2xl rounded-2xl">
            <p className="text-white">1 rem = 16 px</p>
          </section>
        </div>
      </div>
      <div className="rounded-2xl pl-6">
        <h3>Scale</h3>
        <div className="pt-4">
          <section className="w-[17cm] h-[2cm] bg-black flex items-center p-9 text-2xl rounded-2xl">
            <p className="text-white">1 rem = 16 px</p>
          </section>
        </div>
      </div>
      <div>
  {[
    { title: "Display 01", sizes: ["text-lg", "text-2xl", "text-3xl"] },
    { title: "Display 02", sizes: ["text-lg", "text-2xl", "text-3xl"]  },
    { title: "Heading 01", sizes: ["text-xl", "text-lg", "text-2xl"] },
    { title: "Heading 02", sizes: ["text-xl", "text-lg", "text-2xl"] },
    { title: "Heading 03", sizes: ["text-lg", "text-base", "text-xl"] },
    { title: "Heading 04", sizes: ["text-lg", "text-base", "text-xl"] },
    { title: "Heading 05", sizes: ["text-lg", "text-base", "text-xl"] },
    { title: "Heading 06", sizes: ["text-lg", "text-base", "text-xl"] },
  ].map((section, index) => (
    <section
      key={index}
      className="w-full max-w-[1251px] h-[124px] rounded-2xl p-6 mt-3"
    >
      <p className="text-lg font-semibold">{section.title}</p>
      <div className="flex gap-4 mt-4">
        {["Semi Bold", "Bold", "Extra Bold"].map((weight, i) => (
          <div
            key={i}
            className="w-[280px] h-[100px] flex items-center justify-center rounded-lg p-4"
          >
            <div className="text-left">
              <p className={`${section.sizes[i]} font-bold`}>
                {section.title}
              </p>
              <p className={`${section.sizes[i]} font-bold`}>{weight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  ))}
</div>
      <div>
  {[
    { title: "Subheading 01", sizes: ["text-sm", "text-xs", "text-base"] },
    { title: "Paragraph 01", sizes: ["text-sm", "text-xs", "text-base"] },
    { title: "Paragraph 02", sizes: ["text-sm", "text-xs", "text-base"] },
    { title: "Paragraph 03", sizes: ["text-sm", "text-xs", "text-base"] },
    { title: "Label 01", sizes: ["text-sm", "text-xs", "text-base"] },
    { title: "Label 02", sizes: ["text-sm", "text-xs", "text-base"] },
    { title: "Label 03", sizes: ["text-sm", "text-xs", "text-base"] },
    { title: "Caption", sizes: ["text-xs", "text-[10px]", "text-sm"] },
    { title: "Footer", sizes: ["text-xs", "text-[10px]", "text-sm"] },
  ].map((section, index) => (
    <section
      key={index}
      className="w-full max-w-[1251px] h-[124px] rounded-2xl p-6 mt-3"
    >
      <p className="text-lg font-semibold">{section.title}</p>
      <div className="flex gap-4 mt-4">
        {["Regular", "Medium", "Semi Bold"].map((weight, i) => (
          <div
            key={i}
            className="w-[280px] h-[100px] flex items-center justify-center rounded-lg p-4"
          >
            <div className="text-left">
              <p className={`${section.sizes[i]} font-bold`}>
                {section.title}
              </p>
              <p className={`${section.sizes[i]} font-bold`}>{weight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  ))}
</div>
      <div>
  {[
    { title: "Footer", sizes: ["text-[8px]", "text-[6px]", "text-[4px]"] },
  ].map((section, index) => (
    <section
      key={index}
      className="w-full max-w-[1251px] h-[124px] rounded-2xl p-6 mt-3"
    >
      <p className="text-lg font-semibold">{section.title}</p>
      <div className="flex gap-4 mt-4">
        {["Light","Regular", "Medium"].map((weight, i) => (
          <div
            key={i}
            className="w-[280px] h-[100px] flex items-center justify-center rounded-lg p-4"
          >
            <div className="text-left">
              <p className={`${section.sizes[i]} font-bold`}>
                {section.title}
              </p>
              <p className={`${section.sizes[i]} font-bold`}>{weight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  ))}
</div>

    </div>
  );
}

