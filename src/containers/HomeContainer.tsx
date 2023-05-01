import Hero from '@/components/hero/Hero';
import LatestArrivals from '@/components/homeSections/latestArrivals/LatestArrivals';
import BeautifySpace from '@/components/homeSections/beautifySpace/BeautifySpace';
import BrowseRange from '@/components/homeSections/browseRange/BrowseRange';
import HowWorks from '@/components/homeSections/howWorks/HowWorks';
import Blog from '@/components/homeSections/blog/Blog';
import ImageWithText from '@/components/imageWithText/ImageWithText';
import FullWidthSection from '@/components/fullWidthSection/FullWidthSection';
import Link from 'next/link';

const HomeContainer = () => {
  const fullWidthSectionContent = (
    <>
      <h4 className="text-white text-xl md:text-2xl font-medium mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur
        omnis labore. Voluptates tenetur accusantium est harum! Itaque, animi?
        Numquam!
      </h4>
      <Link
        href="/store"
        className=" text-black bg-white hover:bg-slate-100 px-5 py-2 rounded text-base md:text-lg font-medium"
      >
        Start Shopping
      </Link>
    </>
  );

  return (
    <>
      <ImageWithText
        image="/images/home2.jpg"
        textComp={<Hero />}
        isFill={true}
        className="opacity-40"
      />

      <LatestArrivals title="Latest Arrivals" />
      <BeautifySpace title="Beautify your space" />
      <BrowseRange title="Browse the range" />
      <FullWidthSection
        image="/images/full1.avif"
        content={fullWidthSectionContent}
        height="75vh"
        imageOpacity="opacity-40"
      />
      <HowWorks title="How it works" />
      <Blog title="From our blog" />
    </>
  );
};

export default HomeContainer;
