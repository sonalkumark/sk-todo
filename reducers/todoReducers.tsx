export default function todoReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          name: action.payload.name,
          isCompleted: false
        }
      ];
    }
    case 'TOGGLE_TODO': {
      return state.map((item) => {
        if (item.name == action.payload.name) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          };
        } else {
          return item;
        }
      });
    }
    default: return state;

  }
}