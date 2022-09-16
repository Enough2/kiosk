import Head from "next/head";
import styles from "../styles/components/Layout.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";
const variants = {
    exit: {
        opacity: 0,
        y: 40,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

interface Props {
    className?: string;
    dark?: boolean;
    children?: React.ReactNode;
}

export default function Layout({ className, dark, children, ...props }: Props) {
    return (
        <motion.div className={clsx(styles.container, dark && styles.dark)} layout {...props}>
            <Head>
                <title>KIOSK</title>
            </Head>

            <motion.main
                className={clsx(styles.main, className && className)}
                variants={variants}
                initial="exit"
                animate="animate"
                exit="exit"
            >
                {children}
            </motion.main>

            <footer className={styles.footer}>© 2022 2명도충분하조. All Rights Reserved.</footer>
        </motion.div>
    );
}
