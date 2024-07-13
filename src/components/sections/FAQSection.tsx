import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "How to download videos without watermark",
    children: <p>Open the app on your phone. </p>,
  },
  {
    key: "2",
    label: "Where is the video saved after it is downloaded?",
    children: (
      <p>
        Download files, they are usually saved to the download folder you have
        set as default.
      </p>
    ),
  },
  {
    key: "3",
    label:
      "Does Smedia store downloaded videos or keep a copy of the video?",
    children: <p>Smedia does not host videos.</p>,
  },
  {
    key: "4",
    label: "Do I need to install extensions?",
    children: <p>Are not. </p>,
  },
  {
    key: "5",
    label: "Do I have to pay to download videos?",
    children: <p>No, you don't have to.</p>,
  },
  {
    key: "6",
    label: "Can I download videos on my Android phone?",
    children: (
      <p>
        Yes, but for more convenience we recommend using the Smedia
        software.
      </p>
    ),
  },
  {
    key: "7",
    label:
      "Is there a limit to the number of downloads for downloading videos at Smedia?",
    children: (
      <p>
        No, you can download many of your favorite videos at Smedia without
        having to limit the number of downloads.
      </p>
    ),
  },
  {
    key: "8",
    label: "Can I download high definition videos at Smedia?",
    children: (
      <p>
        Yes, Smedia is a video downloader that provides the highest
        resolution for you.
      </p>
    ),
  },
  {
    key: "9",
    label: "Can I edit videos downloaded at Smedia?",
    children: (
      <p>
        No, Smedia is only a video download tool, does not support video
        editing.
      </p>
    ),
  },
  {
    key: "10",
    label: "Does Smedia provide mp3 download solution?",
    children: <p>Smedia provides full mp3 music download.</p>,
  },
];

const FAQCollapse: React.FC = () => (
  <div id="FAQ" className="flex flex-col justify-center items-center py-10 sm:py-16">
    <div className="mt-10 w-5/6 ">
      <div className="text-center text-gray-700 text-xl xl:text-3xl font-semibold mb-6 xl:mb-16">
        Frequently Asked Questions (FAQ)
      </div>
      <Collapse accordion items={items} />
    </div>
  </div>
);
export default FAQCollapse;
