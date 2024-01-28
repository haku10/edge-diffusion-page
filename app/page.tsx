import "./scss/common.scss";
import { Footer } from "./component/footer";
import { Service } from "./component/main/service";
import { Contact } from "./component/main/contact";
import { ScrollButton } from "./component/button/scroll-button";
import { Top } from "./component/main/top";
import { Mission } from "./component/main/mission";
import { Company } from "./component/main/company";

export default function Main() {
  return (
    <>
      <Top />
      <main className="bg-main">
        <Mission />
        <Service />
        <Company />
        <Contact />
      </main>
      <Footer />
      <div className="spHidden">
        <ScrollButton />
      </div>
    </>
  );
}
