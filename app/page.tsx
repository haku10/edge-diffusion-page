import "./scss/common.scss";
import { Footer } from "./component/footer";
import { Service } from "./component/main/service";
import { Contact } from "./component/main/contact";
import { ScrollButton } from "./component/button/scroll-button";
import { Top } from "./component/main/top";
import { Mission } from "./component/main/mission";

export default function Main() {
  return (
    <>
      {/* TODO あとで消す */}
      <h2 className="text-title text-center">ページ作成中</h2>
      <Top />
      <main className="bg-main">
        <Mission />
        <Service />
        <Contact />
      </main>
      <Footer />
      <ScrollButton />
    </>
  );
}
