import Hero from '@/components/Hero/Hero';
import LatestArrivals from '@/components/homeSections/latestArrivals/LatestArrivals';
import BeautifySpace from '@/components/homeSections/beautifySpace/BeautifySpace';
import BrowseRange from '@/components/homeSections/browseRange/BrowseRange';
import HowWorks from '@/components/homeSections/howWorks/HowWorks';
import Blog from '@/components/homeSections/blog/Blog';
import ImageWithText from '@/components/imageWithText/ImageWithText';
import FullWidthSection from '@/components/fullWidthSection/FullWidthSection';

const HomeContainer = () => {
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
        mainText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur omnis labore. 
          Voluptates tenetur accusantium est harum! Itaque, animi? Numquam!"
        buttonText="Start Shopping"
      />
      <HowWorks title="How it works" />
      <Blog title="From our blog" />
    </>
  );
};

export default HomeContainer;
