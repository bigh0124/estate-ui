import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummyData";

const SinglePage = () => {
  const { images, title, address, description, price } = singlePostData;

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{title}</h1>
                <p>
                  <img src="/pin.png" />
                  {address}
                </p>
                <span className="price">${price}</span>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default SinglePage;
