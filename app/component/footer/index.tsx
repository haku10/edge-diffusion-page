import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-main">
      <Image className="relative" src="/footer.svg" alt="footer" width={1808} height={450} />
      <footer className="text-center p-4">
        <p>Ⓒ Edge Diffusion Co.,Ltd.</p>
      </footer>
    </div>
  );
};
