function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
wait(1000)
  .then(() => {
    console.log("Step 1: Done!");
    return wait(2000);
  })
  .then(() => {
    console.log("Step 2: Done!");
    return wait(1500);
  })
  .then(() => {
    console.log("Step 3: Done!");
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });
