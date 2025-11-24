import Link from "next/link";

export default function NotFound() {
    return (
        <main className="container mt-5 text-center">
            <h1> 404 - Page Not Found </h1>
            <p> The blog poast you are looking for dose not exist.</p>
            <Link href="/" className="btn btn-primary mt-3">
                Back to Home
            </Link>
        </main>
    );
}