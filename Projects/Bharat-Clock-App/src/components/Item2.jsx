function Item2() {
  let time = new Date();
  return (
    <p className="item-2 lead">
      The current Time is:{time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default Item2;
