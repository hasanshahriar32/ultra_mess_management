import Navbar from "@/components/navbar/navbar";
import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import DateSelect from "@/components/heroDateSelect/dateSelect";
const Meal = () => {
  return (
    <div>
      <Head>
        <title>Track Meal | আমিন ছাত্রাবাস</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/109535601?v=4"
        />
      </Head>

      {/* <main className={styles.main}> */}
      <Navbar />
      <div className="">
        {" "}
        <DateSelect />
      </div>
      {/* </main> */}
    </div>
  );
};

export default Meal;
