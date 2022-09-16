export default function backend(url: string) {
    return new URL(url, process.env.NEXT_PUBLIC_BACKEND_URL ?? "").toString();
}
