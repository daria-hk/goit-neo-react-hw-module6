import { configureStore } from "@reduxjs/toolkit";

/**{
  contacts: {
		items: []
	},
  filters: {
		name: ""
	}
}
 */

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const rootResucer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "contacts/items":
      console.log(action);
      return { state: action };
    case "filters/name":
      console.log(action);
      return { state: action };
    default:
      return state;
  }
};
export const store = configureStore({
  reducer: rootResucer,
});
