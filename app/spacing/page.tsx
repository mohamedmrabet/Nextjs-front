import React from "react";

export default function typography() {
  return (
    <div className="p-6">
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-black">Sizes & Spacings</h1>
        <p className="mt-2 text-lg text-gray-600">
          Use multiples of 4 or 8. Apply it to typography, buttons, spacings, etc. A few examples below.
        </p>
        <hr className="border-t-2 border-gray-300 mt-4" />
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-black">Spacing</h2>
        <hr className="border-t-2 border-gray-300 mt-4" />
      </section>
      <section>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Token</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
              <th className="border border-gray-300 px-4 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
  <tr>
    <td className="border border-gray-300 px-4 py-2">4</td>
    <td className="border border-gray-300 px-4 py-2">Fine spacing between individual items in a list, such as patient records or medications in a navigation bar.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-xxx-sm</td>
    <td className="border border-gray-300 px-4 py-2">4px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[4px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">6</td>
    <td className="border border-gray-300 px-4 py-2">Fine spacing between individual items in a list, such as patient records or medications in a navigation bar.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-xxx-sm</td>
    <td className="border border-gray-300 px-4 py-2">6px</td>
    <td className="border border-gray-300 px-4 py-2">
  <div className="w-[6px] h-[72px] bg-purple-200"></div>
</td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">8</td>
    <td className="border border-gray-300 px-4 py-2">Small spacing between elements within a card component, like between an image and text</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-x-sm</td>
    <td className="border border-gray-300 px-4 py-2">8px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[8px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">12</td>
    <td className="border border-gray-300 px-4 py-2">Small margins around individual input fields in a form, providing a neat and consistent appearance.
    Vertical spacing between labels and input fields in a patient registration form.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-sm</td>
    <td className="border border-gray-300 px-4 py-2">12px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[12px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">16</td>
    <td className="border border-gray-300 px-4 py-2">Horizontal spacing between primary action buttons in a toolbar or navigation.
Vertical spacing between cards in a grid displaying health articles.
Padding within a modal or dialog for comfortable content placement.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-md</td>
    <td className="border border-gray-300 px-4 py-2">16px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[16px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">20</td>
    <td className="border border-gray-300 px-4 py-2">Spacing between major sections on a patient dashboard, ensuring a clear separation between different health data.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-big</td>
    <td className="border border-gray-300 px-4 py-2">20px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[20px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">24</td>
    <td className="border border-gray-300 px-4 py-2">Substantial spacing between distinct sections or groups of related content, like between a patient's medical records and appointment history.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-x-big</td>
    <td className="border border-gray-300 px-4 py-2">24px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[24px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">28</td>
    <td className="border border-gray-300 px-4 py-2">A substantial visual separation is desired, such as between major content areas like patient information and billing details.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-xx-big</td>
    <td className="border border-gray-300 px-4 py-2">28px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[28px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">32</td>
    <td className="border border-gray-300 px-4 py-2">Generous spacing between large-scale components or sections, for example, creating a clear distinction between a patient's profile and appointment scheduler.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-xxx-big</td>
    <td className="border border-gray-300 px-4 py-2">32px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[32px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">40</td>
    <td className="border border-gray-300 px-4 py-2">Larger gaps between major sections or groups of content, such as between different modules like patient records and medical history.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-lg</td>
    <td className="border border-gray-300 px-4 py-2">40px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[40px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">48</td>
    <td className="border border-gray-300 px-4 py-2">Extensive spacing between major content areas or sections, creating a pronounced visual break, such as between a health dashboard and administrative tools.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-x-lg</td>
    <td className="border border-gray-300 px-4 py-2">48px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[48px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">64</td>
    <td className="border border-gray-300 px-4 py-2">Very generous spacing, used sparingly for pronounced visual separation, like creating ample space around a hero section on a health landing page.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-xx-lg</td>
    <td className="border border-gray-300 px-4 py-2">64px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[64px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">72</td>
    <td className="border border-gray-300 px-4 py-2">Creating substantial gaps between significant content blocks or sections, for instance, between a health news section and a patient's personalized recommendations.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-xxx-lg</td>
    <td className="border border-gray-300 px-4 py-2">72px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[72px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">80</td>
    <td className="border border-gray-300 px-4 py-2">Creating substantial gaps between significant content blocks or sections, for instance, between a health news section and a patient's personalized recommendations.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-blg</td>
    <td className="border border-gray-300 px-4 py-2">80px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[80px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">96</td>
    <td className="border border-gray-300 px-4 py-2">The most extensive spacing needs, typically used in layouts with very distinct, large-scale sections, like providing significant space between a health blog and user profile.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-x-blg</td>
    <td className="border border-gray-300 px-4 py-2">96px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[96px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-300 px-4 py-2">100</td>
    <td className="border border-gray-300 px-4 py-2">The most extensive spacing needs, typically used in layouts with very distinct, large-scale sections, like providing significant space between a health blog and user profile.</td>
    <td className="border border-gray-300 px-4 py-2">$Spacing-xx-blg</td>
    <td className="border border-gray-300 px-4 py-2">100px</td>
    <td className="border border-gray-300 px-4 py-2">
    <div className="w-[100px] h-[72px] bg-purple-200"></div>
    </td>
  </tr>
</tbody>

        </table>
      </section>
    </div>
  );
}
