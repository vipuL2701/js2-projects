function fetchData(callback) {
  setTimeout(() => {
    const data = "This is some fetched data!";
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log("Data received:", data);
}

fetchData(handleData);
