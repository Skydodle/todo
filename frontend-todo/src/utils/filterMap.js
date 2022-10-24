export const FILTER_MAP = {
  All: () => true,
  Active: (item) => !item.complete,
  Completed: (item) => item.complete
};

export const FILTER_NAMES = Object.keys(FILTER_MAP);
