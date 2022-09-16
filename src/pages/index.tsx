import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Clock from "../components/Clock";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";

const Home: NextPage = () => {
    const event = useRef<EventSource | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (!event.current) {
            event.current = new EventSource("http://192.168.45.78:8000/detect");
            event.current.onopen = () => {
                console.log("Connected to websocket");
            };
            event.current.onmessage = (message) => {
                if (message.data === "1") {
                    router.push("/preview");
                    event.current?.close();
                }
            };
        }
    }, []);

    return (
        <Layout dark>
            <Clock></Clock>
        </Layout>
    );
};

export default Home;
