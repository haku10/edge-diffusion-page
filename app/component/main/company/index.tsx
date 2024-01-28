import styles from "./style.module.css";

export const Company = () => {
  return (
    <>
      {/** TODO のちほどSPで表示されるようにする */}
      <div className="spHidden">
        <h2 className="text-title text-center">COMPANY</h2>
        <div className="flex justify-center items-start my-8 md:px-36">
          {/* 顔写真 */}
          <div className="flex-1 flex justify-center bg-gray-700 md:w-112 md:h-130">
            <img
              src="/face-photo.jpg"
              alt="face-photo"
              className="w-48 h-48 object-cover rounded-full"
            />
          </div>
          {/* テキスト */}
          <div className="flex-1 md:ml-4">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
        </div>
        <h3 className="mt-16 text-center">会社概要</h3>
        <div className={`${styles.tableContainer}`}>
          <ul className={`${styles.aboutCompanyRow}`}>
            <li className={styles.itemKey}>
              <div className="h-12 ml-12 mt-4">社名</div>
            </li>
            <li className={styles.itemKey}>
              <div className="h-12 ml-12 mt-4">設立</div>
            </li>
            <li className={styles.itemKey}>
              <div className="h-12 ml-12 mt-4">代表取締役</div>
            </li>
            <li className={styles.itemKey}>
              <div className="h-12 ml-12 mt-4">住所</div>
            </li>
            <li className={styles.itemKey}>
              <div className="h-12 ml-12 mt-4">連絡先</div>
            </li>
            <li className={styles.itemKey}>
              <div className="h-12 ml-12 mt-4">事業内容</div>
            </li>
          </ul>
          <ul className={`${styles.aboutCompanyRow}`}>
            <li className={styles.itemValue}>
              <div className="h-12 mt-4">説明1</div>
            </li>
            <li className={styles.itemValue}>
              <div className="h-12 mt-4">説明3</div>
            </li>
            <li className={styles.itemValue}>
              <div className="h-12 mt-4">説明5</div>
            </li>
            <li className={styles.itemValue}>
              <div className="h-12 mt-4">説明6</div>
            </li>
            <li className={styles.itemValue}>
              <div className="h-12 mt-4">説明7</div>
            </li>
            <li className={`${styles.itemValue}`}>
              <div className="h-12 flex flex-col justify-center items-start">
                ITコンサルティング
              </div>
              <div className="h-12 flex flex-col justify-center items-start">WEB開発</div>
              <div className="h-12 flex flex-col justify-center items-start">
                ITコンサルティング
              </div>
              <div className="h-12 flex flex-col justify-center items-start">
                ITコンサルティング
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
