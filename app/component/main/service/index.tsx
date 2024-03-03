"use client";

import { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { WebDevelopment } from "./parts/web-development";
import { Consulting } from "./parts/consulting";

export const Service = () => {
  const [selectedService, setSelectedService] = useState("WebDevelopment");

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };
  return (
    <>
      {/** TODO のちほどSPで表示されるようにする */}
      <div className="bg-second-black text-white md:pb-16">
        <h2 className="md:text-title text-center">SERVICE</h2>
        <div className={`${styles.service}`}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
        <div className="mb-105">
          {/** PCサイズの場合に表示 */}
          <div className="spHidden">
            <div
              className={`${styles.part} md:flex md:justify-center md:items-center md:space-x-4`}
            >
              <div
                className={`${styles.WebDevelopment} ${
                  selectedService === "WebDevelopment" ? "text-white" : "text-gray-600"
                }`}
                onClick={() => handleSelectService("WebDevelopment")}
              >
                <div>Web Development /</div>
                <div className="text-lg text-left -mt-3">Web開発</div>
              </div>
              <div
                className={`mr-4 ${styles.Consulting} ${
                  selectedService === "Consulting" ? "text-white" : "text-gray-600"
                }`}
                onClick={() => handleSelectService("Consulting")}
              >
                <div>Consulting /</div>
                <div className="text-lg text-left -mt-3">コンサルティング</div>
              </div>
            </div>
            <div className="mt-3">
              {/* 条件付きレンダリング */}
              {selectedService === "WebDevelopment" && <WebDevelopment />}
              {selectedService === "Consulting" && <Consulting />}
            </div>
          </div>
          {/** SPサイズの場合に表示 */}
          <div className="pcHidden mt-3">
            {/* 条件付きレンダリング */}
            <div
              className={`text-white ${styles.WebDevelopment}`}
              onClick={() => handleSelectService("WebDevelopment")}
            >
              <div>Web Development /</div>
              <div className="text-lg text-left -mt-3">Web開発</div>
            </div>
            <WebDevelopment />
            <div
              className={`text-white ${styles.Consulting}`}
              onClick={() => handleSelectService("Consulting")}
            >
              <div>Consulting /</div>
              <div className="text-lg text-left -mt-3">コンサルティング</div>
            </div>
            <Consulting />
          </div>
          {/** TODO のちほどSPで表示されるようにする */}
          <div className="spHidden">
            <div className="absolute h-[516px] w-[664px] md:z-10 md:mt-[-40px] md:ml-[-128px]">
              <Image
                src="/edge-diffusion-company-1.svg"
                alt="edge-diffusion-company-1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute h-[520px] w-[664px] md:z-10 md:mt-[-40px] right-0">
              <Image
                src="/edge-diffusion-company-2.svg"
                alt="edge-diffusion-company-2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
