import MyButton from "./MyButton";
import MyTwitterShareBtn from "./MyTwitterShareBtn";
// import { FacebookShareButton, FacebookIcon } from "react-share";
function MyCard({ data, bgColor, setBgColor, fetchData }) {
  console.log(bgColor);
  return (
    <div className="card" id="mainCard" style={{ backgroundColor: bgColor }}>
      <div className="card-body">
        <h5 className="card-title">{data.author}</h5>
        <p className="card-text">{data.quote}</p>
        <div>
          {/* <FacebookShareButton url=" " quote={`${data.quote} - ${data.author}`}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton> */}
          <MyTwitterShareBtn data={data} />
          <MyButton
            fetchData={fetchData}
            setBgColor={setBgColor}
            bgColor={bgColor}
          />
        </div>
      </div>
    </div>
  );
}

export default MyCard;
