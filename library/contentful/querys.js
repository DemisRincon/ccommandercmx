export const slugQuery = `
  query {
    pageCollection(order:slug_ASC){
      items{
        slug,
        name
      }
    }
  }
`;

export const findBySlugQuery = (slug) => `
  query {
    pageCollection(where: { slug:"${slug}" },  limit: 1){
      items{
        name,
        title,
        slug
        blocksCollection{
          ... on PageBlocksCollection{
            items{
              ... on BannerWithContent{
                __typename,
                title,
                logoWithLegends{
                  url
                },
                paragraphs
              }
              ... on Article{
                __typename,
                title,
                paragraphs
              }
              ... on CardGrid{
                __typename,
                title,
                cardList,
                paragraphs
              }
              ... on SocialMediaArticle{
                __typename,
                url,
                title,
                paragraphs,
                type
              }
              ... on ImageGrid{
                __typename,
                title,
                paragraphs,
                imagesWithContentCollection(limit:20){
                  ... on ImageGridImagesWithContentCollection{
                    items{
                      ...on ImageWithContent{
                        title,
                        paragraphs,
                        image{
                          url
                        }
                      }
                    }
                  }
                } 	
              }
              ... on Button{
                __typename,
                text,
                url
                slug
              }
            }
          },        
        }
      }
    }
  }
`;

export const navQuery = `query {
    navbarCollection{
     items{
       navList,
        logo{
          url
        }
      }
    }
   }`;

export const wallQuery = (name) => ` query {
    wallCollection(where:{slug:"${name}" }){
      items{
        slug
        title
        subtitle
        wall{
          url
        }
      }
    }
    }`;

export const collaboratorsListQuery = ` query {
      collaboratorsListCollection(limit: 20){
        items {
          slug
          title
          collaboratorUnitCollection(limit: 20){
            ... on CollaboratorsListCollaboratorUnitCollection{
              items{
                ...on Collaborator{
                  slug,
                  name,
                  picture{
                    url
                  },
                }
              }
            }
          }
        }
      }
    }`;
