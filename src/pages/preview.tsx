import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Preview.module.scss";
import backend from "../utils/url";

const Preview: NextPage = () => {
    return (
        <Layout>
            <span className={styles.message}>잠시만 기다려주세요</span>
            <img className={styles.preview} src={backend("stream")}></img>
        </Layout>
    );
};

export default Preview;
