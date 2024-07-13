"use client";
import React, { useEffect, useState } from "react";
import { Typewriter } from "nextjs-simple-typewriter";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSocialAutoLink } from "@/service/api";
import { useSocialAutoLink } from "@/context/SocialAutoLinkContext";
import FullScreenLoading from "../common/Loading";
import { Input } from "antd";
import Tooltip from "../common/Tooltip";
import { PiAsterisk } from "react-icons/pi";
import { FaRegPaste } from "react-icons/fa6";
import { isValidUrl } from "@/lib/utils";
import CryptoJS from "crypto-js";

function DownloadSection() {
  const [urlInput, setUrlInput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setSocialAutoLinkData } = useSocialAutoLink();

  const apikey = process.env.NEXT_PUBLIC_SECRET_KEY;
  console.log("🚀 ~ DownloadSection ~ apikey:", apikey);
  const mutateSocialAutoLink = useMutation({
    mutationFn: (data: any) => getSocialAutoLink(data),
    onError: () => {
      console.log("error");
    },

    onSuccess: (data) => {
      console.log("🚀 ~ DownloadSection ~ data:", data)
      setSocialAutoLinkData(data?.data);
      router.push("/download");
    },
  });

  const handlePasteClick = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setUrlInput(text);
        // alert(`Pasted content: ${text}`);
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };
  // useEffect(() => {
  //   if (mutateSocialAutoLink.isSuccess && mutateSocialAutoLink.data) {
  //     setSocialAutoLinkData(mutateSocialAutoLink.data?.data);
  //     router.push("/download");
  //   }
  // }, [mutateSocialAutoLink]);

  const handleDownloadToDevice = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "video_download", {
        event_category: "Video",
        event_label: "Download Success",
        value: 1,
      });
      console.log("Download Success");
    }
  };

  const handleDownloadByLink = () => {
    console.log("🚀 ~ handleDownloadByLink ~ urlInput:", urlInput);
    if (urlInput && isValidUrl(urlInput)) {
      try {
        const data = { url: urlInput };
        const encryptedData = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          "QOWBh06ELYzWgpsmBxrqzGmtadDob50l"
        ).toString();
        console.log("🚀 ~ handleDownloadByLink ~ encryptedData:");
        mutateSocialAutoLink.mutate({ data: encryptedData });
        // if (result.data) {
        //   if (result.data?.data?.error) {
        //     return setError(result.data?.data?.message);
        //   }
        //   // Assuming the result.data contains the information you need
        //   setSocialAutoLinkData(result.data?.data);
        //   router.push(`/download`);
        // }
      } catch (error) {
        console.log("🚀 ~ handleDownloadByLink ~ error:", error);

        setError("An error occurred while fetching data.");
      }
    } else {
      setError("Invalid URL");
    }
  };

  return (
    <div>
      <section id="downloader" className="section text-center pt-10 sm:pt-16">
        <div className="container mx-auto px-0 md:self-center mb-8 md:mb-0 text-center">
          <p className="text-2xl lg:text-4xl font-bold text-gray-700 mb-8 md:ml-[-50px]">
            Download photos &amp; videos from{" "}
            <span className="text-secondary-300 inline-block w-12 text-center">
              <Typewriter
                words={[
                  "Tiktok",
                  "Instagram",
                  "Facebook",
                  "LinkedIn",
                  "Twitter",
                ]}
                loop={0} // 0 hoặc false để lặp vô hạn
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className="description">
            Paste the URL of the post or media and press to download
          </p>

          <div className="form w-full  m-auto py-10 box-shadow md:w-5/6" id="">
            <div className="w-5/6 m-auto flex flex-col lg:flex-row">
              <div className="inline-flex flex-col w-full">
                <Input
                  accept=""
                  type="text"
                  name="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="input h-16 falsefalse border-gray-300 border rounded-xl p-3"
                  id=""
                  onPressEnter={handleDownloadByLink}
                  onFocus={() => setError("")}
                  placeholder="https://"
                  min="0"
                  // suffix={
                  //   <Tooltip message="Paste">
                  //     <FaRegPaste
                  //       className="text-2xl text-secondary-500"
                  //       onClick={handlePasteClick}
                  //     />
                  //   </Tooltip>
                  // }
                />
                {error && <div className="text-red-500 mt-4">{error}</div>}
              </div>
              <button onClick={handleDownloadByLink} className="btn-primary">
                Download
                {/* <RefreshCw className='animate-spin' /> */}
              </button>
            </div>
            <div className="w-5/6 m-auto flex flex-col lg:flex-row mt-10 gap-4 justify-center">
              {/*  <div className="flex  overflow-auto gap-4">
                {typeMedia === "image" ? (
                  <ImagePreview imageUrls={listImg} />
                ) : (
                  <VideoPreview videoUrl={url} />
                )}
              </div> */}
              {/*   <div className="flex justify-center items-center gap-4 min-w-max ">
                <a
                  onClick={handleDownloadToDevice}
                  className="w-full flex p-4 items-center justify-center h-14 border rounded-xl border-primary-300 font-bold cursor-pointer"
                >
                  <Download className="mr-4" />
                  Download{" "}
                  <span className="hidden sm:inline-block ml-1">
                    to your device
                  </span>
                </a>
              </div> */}
            </div>
          </div>
          <div className="">
            <p>No watermarks. No registration.</p>
          </div>
        </div>
      </section>
      {mutateSocialAutoLink.isPending && <FullScreenLoading />}
    </div>
  );
}

export default DownloadSection;
