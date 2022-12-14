import qs from "qs";

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */
export async function getPageData({ slug, locale, preview }) {
  // Find the pages that match this slug
  const gqlEndpoint = getStrapiURL("/graphql");
  const pagesRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      fragment FileParts on UploadFileEntityResponse {
        data {
          id
          attributes {
            alternativeText
            width
            height
            mime
            url
            formats
          }
        }
      }
      query GetPages(
        $slug: String!
        $publicationState: PublicationState!
        $locale: I18NLocaleCode!
      ) {        
        pages(
          filters: { slug: { eq: $slug } }
          publicationState: $publicationState
          locale: $locale
        ) {
          data {
            id
            attributes {
              locale
              localizations {
                data {
                  id
                  attributes {
                    locale
                  }
                }
              }
              slug
              blogs {
                data {
                  id
                  attributes {
                    Title
                    Description
                    Content
                    Category
                    Image {
                      ...FileParts
                    }
                    Slug
                  }
                }
              }
              metadata {
                metaTitle
                metaDescription
                shareImage {
                  ...FileParts
                }
                twitterCardType
                twitterUsername
              }
              contentSections {
                __typename
                ... on ComponentSectionsCta{
                  id
                  Title
                  Buttons{
                    url
                    newTab
                    text
                    type
                  }
                }
                ... on ComponentSectionsBlogpage{
                  title
                }
                ... on ComponentSectionsFaq{
                  id
                  Faqtoggles {
                    Question
                    Answer
                    pdfurl
                  }
                }
                ... on ComponentSectionsHomeblog{
                  id
                  title
                  lastword
                }
                
                
                ... on ComponentSectionsTeams{
                  Teamcards{
                    Name
                    Image{
                      ...FileParts
                    }
                    Position
                    buttons{
                      url
                      newTab
                      text
                      type
                    }
                  }
                }
                ... on ComponentSectionsAdvantages{
                  Title
                  Image{
                    ...FileParts
                  }
                  Advantages{
                    Title
                    Description
                    Image{
                      ...FileParts
                    }
                  }
                }
                ... on ComponentSectionsRevieuw{
                  id
                  Title
                  lastword
                  cards{
                    id
                    Image {
                      ...FileParts
                    }
                    Name
                    Opinion
                    Rating
                  }
                }
                ... on ComponentSectionsContact{
                  id
                  title
                  subtitle
                  icons{
                    id
                    iconText
                    icon{
                      ...FileParts
                    }
                    link
                  }
                }
                ... on ComponentSectionsOfferte{
                  id
                  Offertes{
                    id
                    Question
                    field
                  }
                }
                ... on ComponentSectionsAboutus {
                  id
                  Title
                  Description
                  Image{
                    ...FileParts
                  }
                }
                ... on ComponentSectionsHero{
                  lastword
                  id
                  Title
                  bg
                  Description
                  Image{
                    ...FileParts
                  }
                  Buttons{
                    id
                    url
                    newTab
                    text
                    type
                  }
                }
                ... on ComponentSectionsHomeService{
                  id
                  Title
                  Description
                  companys{
                    Image{
                      ...FileParts
                    }
                  }
                  Cards{
                    id
                    Title
                    Description
                    Image{
                      ...FileParts
                    }
                    Buttons{
                      id
                      url
                      newTab
                      text
                      type
                    }
                  }
                }
                ... on ComponentSectionsThankyou{
                  title
                  image{
                    ...FileParts
                  }
                  links{
                    url
                    newTab
                    text
                    type
                  }
                }
                ... on ComponentSectionsSection{
                  lastword
                  id
                  idlink
                  Title
                  Description
                  Background
                  Position
                  Image{
                    ...FileParts
                  }
                  Buttons{
                    id
                    url
                    newTab
                    text
                    type
                  }
                }
              }
            }
          }
        }
      }      
    
    `,
      variables: {
        slug,
        publicationState: preview ? "PREVIEW" : "LIVE",
        locale,
      },
    }),
  });

  const pagesData = await pagesRes.json();
  // Make sure we found something, otherwise return null
  if (pagesData.data?.pages == null || pagesData.data.pages.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return pagesData.data.pages.data[0];
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData(locale) {
  const gqlEndpoint = getStrapiURL("/graphql");
  const globalRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        fragment FileParts on UploadFileEntityResponse {
          data {
            id
            attributes {
              alternativeText
              width
              height
              mime
              url
              formats
            }
          }
        }
        query GetGlobal($locale: I18NLocaleCode!) {
          global(locale: $locale) {
            data {
              id
              attributes {
                favicon {
                  ...FileParts
                }
                
                metadata {
                  metaTitle
                  metaDescription
                  shareImage {
                    ...FileParts
                  }
                  twitterCardType
                  twitterUsername
                }
                metaTitleSuffix
                notificationBanner {
                  type
                  text
                }
                navbar {
                  logoWhite {
                    ...FileParts
                  }
                  logoBlack{
                    ...FileParts
                  }
                  background
                  links {
                    id
                    url
                    newTab
                    text
                  }
                  button {
                    id
                    url
                    newTab
                    text
                    type
                  }
                }
                
                
                navicons{
                  id
                  icon{
                    ...FileParts
                  }
                  link
                  iconText
                }
                footer {
                  logo {
                    ...FileParts
                  }
                  
                  url
                  urltext
                  smallText
                  columns {
                    noab{
                      ...FileParts
                    }
                    id
                    title
                    links {
                      id
                      url
                      newTab
                      text
                      icons
                      secondtext
                    }
                  }
                }
              }
            }
          }
        }      
      `,
      variables: {
        locale,
      },
    }),
  });

  const global = await globalRes.json();
  

  return global.data.global;
}

export async function getBlogData({ slug, locale, preview }) {
  const gqlEndpoint = getStrapiURL("/graphql");
  const blogsRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      fragment FileParts on UploadFileEntityResponse {
        data {
          id
          attributes {
            alternativeText
            width
            height
            mime
            url
            formats
          }
        }
      }
      query GetBlogs(
                $slug: String!
                $publicationState: PublicationState!
                )
                {
                  blogs(
                    filters: { Slug: { eq: $slug } }
                    publicationState: $publicationState
        )
        {
            data{
              id
              attributes{
                Slug
                Title
                Content
                Category
                Description
                Image{
                  ...FileParts
                }
              }
            }
        }
      }
      `,
      variables: {
        slug,
        publicationState: preview ? "PREVIEW" : "LIVE",
        locale,
      },
    }),
  });

  const blogsData = await blogsRes.json();
  // Make sure we found something, otherwise return null
  if (blogsData.data?.blogs == null || blogsData.data.blogs.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return blogsData.data.blogs.data[0];
}
