import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";

const Home: NextPage = () => {
    return <Layout dark>Hello, World!</Layout>;
};

export default Home;
