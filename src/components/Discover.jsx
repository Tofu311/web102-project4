import "../index.css";

const Discover = ({ banList, getImage, currentImage }) => {
  return (
    <div className="discover-container">
      <button style={{ marginTop: 12 }} onClick={getImage}>
        Discover your new friend!
      </button>
      {currentImage ? (
        <div style={{ marginTop: 12 }}>
          <div className="cat-description">
            <h2>
              
            </h2>
          </div>
          <img
            className="cat-pic"
            src={currentImage}
            alt="Random Cat image from Cat API"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Discover;
