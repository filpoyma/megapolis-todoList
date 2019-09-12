const indexById = (id, state) => {
  return state.findIndex((element) => (element.id === id));
};

export default indexById;

