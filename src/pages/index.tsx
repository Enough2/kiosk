import type { NextPage } from "next";
import Clock from "../components/Clock";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";

const Home: NextPage = () => {
    return (
        <Layout dark>
            <Clock></Clock>
        </Layout>
    );
};

export default Home;
