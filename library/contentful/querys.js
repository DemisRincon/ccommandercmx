export const slugQuery = `
  query {
    pageCollection{
      items{
        slug
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
