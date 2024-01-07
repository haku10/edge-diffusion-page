import Image from "next/image";

export const ScrollButton = () => {
  return (
    <button className="fixed bottom-4 right-4">
      <Image src="/scroll-button.svg" alt="scroll-image" width={266} height={266} />
    </button>
  );
};
