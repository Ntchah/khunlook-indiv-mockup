import Image from "next/image";
import Hero from "@/components/home/Hero";
import BlogSection from "@/components/home/BlogSection";
import HeroRight from "@/components/home/HeroRight";
import HeroLeft from "@/components/home/HeroLeft";
import GridMenu from "@/components/home/GridMenu";
import { SP } from "next/dist/shared/lib/utils";
export default function Home() {
  return (
    <div>
      <Hero/>
      <BlogSection/>
     <HeroRight/>
     <GridMenu/>
     <HeroLeft/>

    </div>

  );
}
