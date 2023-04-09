export default function TaskReducer(tasks, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...tasks,
        {
          id: action.id,
          name: action.name,
          completed: false,
        },
      ];
    default:
      break;
  }
}
