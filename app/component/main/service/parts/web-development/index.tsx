import Image from "next/image";
import styles from "./style.module.css";

export const WebDevelopment = () => {
  return (
    <>
      <div className={`text-center ${styles.webDevelopment}`}>
        <div>
          AWSを活用した開発により、低コストで始められます。またカスタマイズ性が高く、後から必要になったシステムを追加することができる為、事業規模に応じた予算内での開発が可能です。
          また必要に応じでコンサルティング領域のご提案も行うことで、事業目的に即したサービスをご提供いたします。
        </div>
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
    </>
  );
};
