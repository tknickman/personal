import { getAllPosts } from "../lib/api/posts";
import { Post } from "../lib/types";

import { CompanyContext } from "../contexts/Company";

import { Hero, About, Experience, Blog, Work } from "../components/sections";
import {
  Header,
  Footer,
  DividerCircle,
  DividerPoly,
} from "../components/layout";

const Index = () => {
  return (
    <main className="min-h-screen">
      <CompanyContext>
        <Hero />
        <Header />
        <About />
        <DividerCircle start={4} end={0} />
        <Experience />
        <DividerPoly start={-4} end={0} />
        <Work />
        <DividerCircle start={4} end={0} />
        <Blog />
        <Footer />
      </CompanyContext>
    </main>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
