/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet {
    onCreateSet {
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet {
    onUpdateSet {
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet {
    onDeleteSet {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
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
