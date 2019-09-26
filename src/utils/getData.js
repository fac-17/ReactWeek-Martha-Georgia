function getData(category) {
  return window
    .fetch(
      `https://opentdb.com/api.php?amount=15&category=${category}&type=multiple`
    )
    .then(res => {
      if (!res.ok) throw new Error("HTTP error");
      return res;
      console.log(res);
    })
    .then(res => res.json());
}

export default getData;
