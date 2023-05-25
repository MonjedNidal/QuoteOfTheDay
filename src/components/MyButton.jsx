function MyButton({ setBgColor, bgColor, fetchData }) {
  const handleClick = (e) => {
    let r = Math.floor(Math.random() * 140) + 50;
    let g = Math.floor(Math.random() * 140) + 50;
    let b = Math.floor(Math.random() * 140) + 50;

    setBgColor(`rgb(${r},${g},${b})`);
    fetchData();
  };
  return (
    <button
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
      type="button"
      className="btn btn-light"
    >
      New Quote
    </button>
  );
}

export default MyButton;
