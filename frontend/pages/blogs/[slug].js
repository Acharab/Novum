import ErrorPage from "next/error";
import { fetchAPI, getGlobalData, getBlogData } from "utils/api";
import Sections from "@/components/sections";
import Seo from "@/components/elements/seo";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getLocalizedPaths } from "utils/localize";
import Eachblog from "@/components/sections/eachblog";
import { Category } from "@mui/icons-material";

const Blog = ({
  Title,
  Description,
  Content,
  Category,
  Image,
  global,
  pageContext,
}) => {
  const router = useRouter();

  //Check if the required data was provided
  if (!router.isFallback && (!Title || !Description || !Image || !Content || !Category)) {
    console.log('either one of the required data is missing: ', Title, Description, Image);
    return <ErrorPage statusCode={404} />;
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout 
    global={global} 
    pageContext={pageContext}
    >
      {/* Add meta tags for SEO*/}
      {/* <Seo seo={metadataWithDefaults} /> */}
      {/* Display content sections */}
      
    <Eachblog Title={Title} Description={Description} Image={Image} Content={Content} Category={Category} />
    </Layout>
  );
};

export async function getStaticPaths(context) {
  const blogPages = await context.locales.reduce(
    async (currentPagesPromise) => {
      const currentPages = await currentPagesPromise;
      return currentPages;
    },
    Promise.resolve([])
  );

  const paths = blogPages.map((page) => {
    const { slug} = page.attributes;

    return {
      params: { slug: slug },
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  console.log('context', context)
  const { params, locale, locales, defaultLocale, preview = null } = context;

  const globalLocale = await getGlobalData(locale);
  const pageData = await getBlogData({
    slug: !params.slug ? [""] : params.slug,
    preview,
  });

  if (pageData == null) {
    return { props: {} };
  }

  const {  Title, Description, Image, Slug, Category, Content } =
    pageData.attributes;

  const pageContext = {
    locale,
    locales,
    defaultLocale,
    Slug,
  };

  return {
    props: {
      preview,
      Content,
      Category,
      Title,
      Description,
      Image,
      global: globalLocale.data,
      pageContext: {
        ...pageContext,
      },
    },
    revalidate: 20,
  };
}

export default Blog;
