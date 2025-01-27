import Layout from "@components/layout/common/Layout";
import ContentLayout from "@components/layout/ContentLayout";
import CoverLayout from "@components/layout/CoverLayout";
import FooterLayout from "@components/layout/FooterLayout";

export default function Home() {
  return (
    <Layout>
      <CoverLayout />
      <ContentLayout />
      <FooterLayout />
    </Layout>
  );
}
