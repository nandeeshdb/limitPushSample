import Footer from "@/components/Footer";
import Heading, { HeadingBotton } from "@/components/HomePage/Heading";
import HowItWorks from "@/components/HomePage/HowItWorks";
import ReadOurBlog from "@/components/HomePage/ReadOurBlog";
import InfiniteHorizontalScroll from "@/components/HomePage/Scroller";
import Testimonial from "@/components/HomePage/Testimonial";

import CurrentFocus from "@/components/HomePage/currentFocus";
import FeaturedProducts from "@/components/HomePage/featuredProducts";
import MainCard from "@/components/HomePage/main-card";
import NavBar from "@/components/navbar";

function HomePage() {
  return (
    <>
    <NavBar />
      <Heading />
      <InfiniteHorizontalScroll />
      <MainCard />
      <FeaturedProducts />
      <CurrentFocus />
      <Testimonial />
      <HowItWorks />
      <ReadOurBlog />
      <HeadingBotton />
      <Footer />
      
    </>
  )
}

export default HomePage