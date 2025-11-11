import { Banner } from "../components/homepage/banner/Banner";
import { Footer } from "../components/common/Footer/Footer";
import { Navbar } from "../components/common/Navbar/Navbar";
import { Layout } from "../layout/Layout";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Layout />
      <Footer />
    </>
  );
};
