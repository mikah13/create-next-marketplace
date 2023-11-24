export const response = (message: string, ...args: unknown[]) => {
  return {
    message,
    ...args,
  };
};
