/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSet = /* GraphQL */ `
  mutation CreateSet(
    $input: CreateSetInput!
    $condition: ModelSetConditionInput
  ) {
    createSet(input: $input, condition: $condition) {
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
export const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $input: UpdateSetInput!
    $condition: ModelSetConditionInput
  ) {
    updateSet(input: $input, condition: $condition) {
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
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet(
    $input: DeleteSetInput!
    $condition: ModelSetConditionInput
  ) {
    deleteSet(input: $input, condition: $condition) {
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
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
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
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
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
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
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
