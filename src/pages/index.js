import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <Carousel />
      </section>
    </Layout>
  );
}

export default IndexPage;
