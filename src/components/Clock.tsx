import { useState, useEffect } from "react";
import styles from "../styles/components/Clock.module.scss";

export default function Clock() {
    const [time, setTime] = useState<Date>();

    useEffect(() => {
        setTime(new Date());
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.clock}>
            <span className={styles.time}>
                {time?.toLocaleTimeString("en-US", { hour12: false })}
            </span>
            <span className={styles.date}>{time?.toLocaleDateString("ko-KR")}</span>
        </div>
    );
}
