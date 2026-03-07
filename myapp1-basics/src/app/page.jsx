import Image from "next/image";
import {Hero} from '@/components/hero'
export default function Home() {
  return (
    <div className="absolute inset-0 -z-10">
      <Hero />
    </div>
  );
}
