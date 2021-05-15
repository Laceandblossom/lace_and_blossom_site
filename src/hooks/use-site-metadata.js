import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
export default useSiteMetadata;
