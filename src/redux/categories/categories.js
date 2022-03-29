const CATEGORIES_STATUS = 'CATEGORIES_STATUS';

export default function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case CATEGORIES_STATUS:
      console.log(action);
      return 'Under construction';
    default:
      return state;
  }
}

export const statusCategories = () => ({ type: CATEGORIES_STATUS });
