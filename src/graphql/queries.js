/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
      id
      code
      cardCount
      logoCode
      name
      releaseDate
      cards {
        items {
          id
          newID
          name
          createdAt
          updatedAt
          setCardsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        cardCount
        logoCode
        name
        releaseDate
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
      id
      newID
      name
      set {
        id
        code
        cardCount
        logoCode
        name
        releaseDate
        cards {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      setCardsId
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        newID
        name
        set {
          id
          code
          cardCount
          logoCode
          name
          releaseDate
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        setCardsId
      }
      nextToken
    }
  }
`;
