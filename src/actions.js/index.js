import { push } from 'redux-little-router';

export const STORE_QUERY = 'STORE_QUERY';

const navigateFaq = () => {
  return (dispatch) => {
    dispatch(push('/faq'))
  }
}

const storeQuery = (query) => {
  return {
    type: STORE_QUERY,
    payload: query,
  }
};

const navigateQuery = (string) => {
  return (dispatch) => {
    dispatch(storeQuery(string));
    dispatch(push({
      pathname: '/query',
      query: {
        string: string,
      },
    }))
  }
};

export {
  navigateFaq,
  navigateQuery,
  storeQuery
}
