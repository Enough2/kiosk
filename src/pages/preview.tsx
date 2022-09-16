import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Preview.module.scss";
import backend from "../utils/url";

const Preview: NextPage = () => {
    return (
        <Layout>
            <img src={backend("stream")}></img>
        </Layout>
    );
};

export default Preview;
