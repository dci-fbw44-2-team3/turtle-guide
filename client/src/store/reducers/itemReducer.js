// import {

// } from "../types";

const initialState = {
  loading: false,
  error: null,
};

export default initialState;

// export default (state = initialState, action) => {
//   switch (action.type) {
//   //   case GOOGLE_SEARCH:
//   //     return {
//   //       ...state,
//   //       googleSearch: action.payload,
//   //       loading: true,
//   //     };
//   //   case GOOGLE_SEARCH_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };

//   //   case GOOGLE_SEARCH_CLEAR:
//   //     return {
//   //       ...state,
//   //       googleSearch: [],
//   //       loading: true,
//   //     };
//   //   case GOOGLE_SEARCH_CLEAR_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };
//   //   case GOOGLE_SEARCH_SEARCHED:
//   //     return {
//   //       ...state,
//   //       googleSearched: action.payload,
//   //       loading: true,
//   //     };
//   //   case GOOGLE_SEARCH_SEARCHED_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };
//   //   case ADD_TO_WOO_DB_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };
//   //   case UPDATE_WOO_DB_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };

//   //   case WOO_DB_ALL:
//   //     return {
//   //       ...state,
//   //       wooDbAll: action.payload,
//   //       loading: true,
//   //     };

//   //   case WOO_DB_IN:
//   //     return {
//   //       ...state,
//   //       wooDbIn: action.payload,
//   //       loading: true,
//   //     };

//   //   case WOO_DB_OUT:
//   //     return {
//   //       ...state,
//   //       wooDbOut: action.payload,
//   //       loading: true,
//   //     };
//   //   case WOO_DB_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };
//   //   case WOO_DB_DELETE_ALL:
//   //     if (state.wooDbAll === null) {
//   //       return state;
//   //     } else {
//   //       return {
//   //         ...state,
//   //         wooDbAll: state.wooDbAll.filter((item) => item.id !== action.payload),
//   //         loading: true,
//   //       };
//   //     }

//   //   case WOO_DB_DELETE_IN:
//   //     if (state.wooDbIn === null) {
//   //       return state;
//   //     } else {
//   //       return {
//   //         ...state,
//   //         wooDbIn: state.wooDbIn.filter((item) => item.id !== action.payload),
//   //         loading: true,
//   //       };
//   //     }

//   //   case WOO_DB_DELETE_OUT:
//   //     if (state.wooDbOut === null) {
//   //       return state;
//   //     } else {
//   //       const idToFind = action.payload;
//   //       const arrayIds = state.wooDbOut.map((item) => console.log(item.id));
//   //       const found = arrayIds.find((element) => element === idToFind);
//   //       return {
//   //         ...state,
//   //         wooDbOut: state.wooDbOut.filter((item) => item.id !== action.payload),
//   //         loading: true,
//   //       };
//   //     }
//   //   case WOO_DB_DELETE_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };
//   //   case WOO_DB_SEARCH_STATE:
//   //     return {
//   //       ...state,
//   //       wooDbSearchState: action.payload,
//   //     };
//   //   case WOO_DB_SEARCH_STATE_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };
//   //   case WOO_DB_SEARCH_TERM:
//   //     return {
//   //       ...state,
//   //       wooDbSearchTerm: action.payload,
//   //     };
//   //   case WOO_DB_SEARCH_TERM_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };
//   //   case WOO_DB_DATA_READY:
//   //     return {
//   //       ...state,
//   //       wooDbDataReady: action.payload,
//   //       loading: true,
//   //     };
//   //   case WOO_DB_DATA_READY_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };
//   //   case WOO_DB_SEARCH_CLEAR:
//   //     return {
//   //       ...state,
//   //       wooDbSearchTerm: null,
//   //       wooDbAll: null,
//   //       wooDbIn: null,
//   //       wooDbOut: null,
//   //       wooDbSearchState: null,
//   //       loading: true,
//   //     };
//   //   case WOO_DB_SEARCH_CLEAR_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: true,
//   //     };
//   //   case SET_LOADING:
//   //     return {
//   //       ...state,
//   //       loading: action.payload,
//   //     };
//   //   case SET_LOADING_ERROR:
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       loading: false,
//   //     };
//     default:
//       return state;
//   }
// };
