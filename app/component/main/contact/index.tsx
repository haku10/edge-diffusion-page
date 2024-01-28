import styles from "./style.module.css";

export const Contact = () => {
  return (
    <>
      {/** TODO のちほどSPで表示されるようにする */}
      <div className="spHidden">
        <h2 className={`${styles.customBackground} text-title text-center`}>CONTACT</h2>
        <div className={`${styles.tableContainer}`}>
          <div className="mt-16 w-full">
            <form className="flex flex-col space-y-4">
              <div className="flex items-center">
                <label htmlFor="name" className="w-44 mr-20">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-1/3 p-2 bg-transparent border border-gray-300"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="company" className="w-44 mr-20">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-44 p-2 bg-transparent border border-gray-300"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="email" className="w-44 mr-20">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="flex-grow p-2 bg-transparent border border-gray-300"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="message" className="w-44 mr-20">
                  お問い合わせ内容
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  className="flex-grow p-2 bg-transparent border border-gray-300"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="messageDetail" className="w-44 mr-20">
                  お問い合わせ詳細
                </label>
                <textarea
                  id="messageDetail"
                  name="messageDetail"
                  className="flex-grow p-2 bg-transparent border border-gray-300"
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex items-center">
                  <input type="checkbox" id="checkbox" className="mr-2" />
                  <label htmlFor="checkbox">プライバシーポリシーに同意</label>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="font-bold py-4 px-16 border border-white bg-black text-white mt-4 mx-auto rounded-custom"
                >
                  確認する
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
