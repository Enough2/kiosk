import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/pages/Preview.module.scss";
import backend from "../utils/url";

const Preview: NextPage = () => {
    const [time, setTime] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => setTime((prev) => prev - 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Layout>
            <span className={styles.message}>{time}초 후 인식을 시작합니다</span>
            <div className={styles.progress}>
                <motion.div
                    className={styles.bar}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                ></motion.div>
            </div>
            <img className={styles.preview} src={backend("stream")}></img>
        </Layout>
    );
};

export default Preview;
