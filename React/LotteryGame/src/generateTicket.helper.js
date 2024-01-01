const generateTicket = (n) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  console.log(arr);
  return arr;
};

export default generateTicket;
