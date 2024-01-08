import Image from "next/image";
import styles from "./style.module.css";

export const Top = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        {/* ロゴ */}
        <div className="logo">
          <Image src="/company-logo.svg" alt="company-logo" width={201} height={84} />
        </div>
        {/* ボタンコンテナ */}
        <div className="flex gap-22 mr-16">
          <button className="hover:bg-blue-700 text-second-black font-bold py-2 px-4 rounded">
            MISSION
          </button>
          <button className="hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded">
            SERVICE
          </button>
          <button className="hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded">
            COMPANY
          </button>
          <button className="hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded">
            お問い合わせ
          </button>
        </div>
      </div>
      <div className="mt-16 px-16">
        <div className="flex items-center">
          <span className="text-title font-semibold">CONSULTING</span>
          <span className="ml-8">小さく始める、コンサルティングとWEB開発</span>
        </div>
        <div className={`${styles.webDevelopment} text-title font-semibold`}>WEB DEVELOPMENT</div>
      </div>
      <div className="mt-16 text-center">
        <div className={styles.thought}>
          <div>もっと気軽に</div>
          <div>コンサルティングとWEBシステムを使える世の中へ</div>
        </div>
      </div>
    </>
  );
};
