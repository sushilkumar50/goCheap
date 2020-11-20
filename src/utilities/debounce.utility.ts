export default (functionTobeDebounced: Function, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      functionTobeDebounced.apply(null, args);
    }, delay);
  };
};
