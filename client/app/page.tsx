 import Link from "next/link";

export default function Home() {
  return (
    <div className=""> 
    <h1 className="text-3xl"> A dashbord page application built with Express, Nextjs and deploy to AWS</h1>
    <Link  href={'/dashboard'}> Vist the dashbord</Link>
    </div>

  );
}
