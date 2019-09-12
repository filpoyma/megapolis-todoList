import indexById from './findIndex'


export const crud = (state, payload, func) => {
  const index = indexById(payload.id, state);
  if (func === 'done')
    state[index].done = !state[index].done;
  if (func === 'edit') {
    state[index].content = payload.content;
    state[index].onedit = !state[index].onedit;
  }
  if (func === 'del')
    state.splice(index, 1);
  return state;
};
