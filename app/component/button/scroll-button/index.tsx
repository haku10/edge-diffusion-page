import Image from "next/image";

interface ScrollButtonAboveProps {
  className?: string;
  onClick?: () => void;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // スムーズスクロールを指定
  });
};

export const ScrollButtonAbove: React.FC<ScrollButtonAboveProps> = () => {
  return (
    <button className="fixed bottom-4 right-4 z-30" onClick={scrollToTop}>
      <Image src="/scroll-button.svg" alt="scroll-image" width={266} height={266} />
    </button>
  );
};

export const ScrollButtonBottom = () => {
  return (
    <button className="fixed bottom-4 right-4 z-30">
      <Image src="/scroll-button-under.svg" alt="scroll-image" width={266} height={266} />
    </button>
  );
};
