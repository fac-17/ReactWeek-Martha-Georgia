function getData (category) {
  return Window
  .fetch(`https://opentdb.com/api.php?amount=12&category=10&type=multiple`)
  .then(res => {
    if(!res.ok) throw new Error ("HTTP error");
    return res;
    console.log(res);
  })
  .then(res => res.json());
}

module.exports = { getData };
https://opentdb.com/api.php?amount=12&category=10&type=multiple
