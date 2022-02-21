import { getAllPosts } from "../lib/api/posts";
import { CompanyContext } from "../contexts/Company";
import {
  Hero,
  About,
  Skills,
  Work,
  Blog,
  OpenSource,
} from "../components/sections";
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
        <Work />
        <DividerPoly start={-4} end={0} orientation="down" />
        <Skills />
        <DividerPoly start={-4} end={0} />
        <OpenSource />
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
