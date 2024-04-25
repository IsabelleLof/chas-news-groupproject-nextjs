import Link from "next/link";

export default function HeaderComponent() {
  return (
    <Link href={"/"}>
      <h1 className="text-4xl py-8">NEWS WEBSITE</h1>
    </Link>
  );
}
