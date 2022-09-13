import Head from "next/head";
import styles from "../styles/components/Layout.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

interface Props {
    className?: string;
    dark?: boolean;
    children?: React.ReactNode;
}

export default function Layout({ className, dark, children, ...props }: Props) {
    return (
        <div className={clsx(styles.container, dark && styles.dark)} {...props}>
            <Head>
                <title>KIOSK</title>
            </Head>
            <motion.main
                className={clsx(styles.main, className && className)}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 100,
                    delay: 0.3,
                }}
            >
                {children}
            </motion.main>
            <footer className={styles.footer}>© 2022 2명도충분하조. All Rights Reserved.</footer>
        </div>
    );
}
