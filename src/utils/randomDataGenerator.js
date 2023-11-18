// export const randomDataGenerator = () => {
//     return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
//   };




export const randomDataGenerator = () => {
  return Array.from({ length: 10 }, () => {
    // Generating random data for the chart
    return {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    };
  });
};
