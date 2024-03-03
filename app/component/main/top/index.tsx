"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { motion } from "framer-motion";

export const Top = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-main"
      >
        <div className="flex justify-between items-center p-4">
          {/* ロゴ */}
          <div className="logo">
            <Image src="/company-logo.svg" alt="company-logo" width={201} height={84} />
          </div>
          {/* ボタンコンテナ */}
          <div className="spHidden md:flex md:gap-0.5 md:mr-4 md:z-20">
            <button className="hover:bg-black hover:text-white hover:rounded-custom font-bold py-6 px-16 rounded">
              MISSION
            </button>
            <button className="hover:bg-black hover:text-white hover:rounded-custom font-bold py-6 px-16 rounded">
              SERVICE
            </button>
            <button className="hover:bg-black hover:text-white hover:rounded-custom font-bold py-6 px-16 rounded">
              COMPANY
            </button>
            <button className="hover:bg-black hover:text-white hover:rounded-custom font-bold py-6 px-16 rounded">
              お問い合わせ
            </button>
          </div>
          <div className="md:z-10 absolute h-[624px] w-[443px] md:mt-[400px] right-0">
            {/* Image要素にz-indexを適用 */}
            <div style={{ zIndex: -1, position: "absolute", width: "100%", height: "100%" }}>
              <Image
                src="/edge-diffusion-company-top.svg"
                alt="edge-diffusion-company-top"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 px-16">
          <div className="md:flex md:items-center md:z-20">
            <span className="md:text-title font-semibold md:z-20">CONSULTING</span>
            <span className="ml-8 md:z-20">小さく始める、コンサルティングとWEB開発</span>
          </div>
          <div
            className={`${styles.webDevelopment} md:text-title md:font-semibold`}
            style={{ zIndex: 30, position: "relative" }}
          >
            WEB DEVELOPMENT
          </div>
        </div>
        <div className="mt-16 text-center md:z-20">
          <div className={styles.thought}>
            <div>もっと気軽に</div>
            <div>コンサルティングとWEBシステムを使える世の中へ</div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
