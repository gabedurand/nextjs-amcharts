import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("@/charts/test"), { ssr: false });

export default function Home() {
  return <ChartComponent />;
}
