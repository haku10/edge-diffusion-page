import styles from "./style.module.css";
import Image from "next/image";

export const Service = () => {
  return (
    <>
      <div className="bg-second-black text-white pb-16">
        <h2 className="text-title text-center">SERVICE</h2>
        <div className={`${styles.service}`}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
        <div className="mb-105">
          <div className={`${styles.part} flex justify-center items-center space-x-4`}>
            <div className={styles.WebDevelopment}>Web Development /</div>
            <div className={`mr-4 ${styles.WebDevelopment}`}>Consulting /</div>
          </div>
          <div className="flex justify-center items-center space-x-4 md:relative md:z-20">
            <div className="md:flex md:gap-16">
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                  <Image src="/sample-explain.svg" alt="mission" layout="fill" objectFit="cover" />
                </div>
                <div className="mt-1">MISSION</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                  <Image src="/sample-explain.svg" alt="mission" layout="fill" objectFit="cover" />
                </div>
                <div className="mt-1">SERVICE</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                  <Image src="/sample-explain.svg" alt="mission" layout="fill" objectFit="cover" />
                </div>
                <div className="mt-1">COMPANY</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                  <Image src="/sample-explain.svg" alt="mission" layout="fill" objectFit="cover" />
                </div>
                <div className="mt-1">お問い合わせ</div>
              </div>
            </div>
          </div>
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
    </>
  );
};
