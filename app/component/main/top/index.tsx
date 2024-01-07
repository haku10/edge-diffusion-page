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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button 1
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button 2
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button 3
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button 4
          </button>
        </div>
      </div>
      <div className="mt-16 px-16">
        <div className="flex items-center">
          <span className="text-title font-semibold">CONSULTING</span>
          <span className="ml-8">小さく始める、コンサルティングとWEB開発</span>
        </div>
        <div className="text-title font-semibold">WEB DEVELOPMENT</div>
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
