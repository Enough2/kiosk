import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <AnimatePresence initial={false} mode="wait">
            <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
    );
}
