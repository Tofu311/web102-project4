import "../index.css";

const Discover = ({
  banList,
  toggleBan,
  getImage,
  currentImage,
  attributes,
}) => {
  const { breed, age, weight, origin } = attributes;

  const isBanned = (value) => banList && banList.includes(value);

  return (
    <div className="discover-container">
      <button style={{ marginTop: 12 }} onClick={getImage}>
        Discover your new friend!
      </button>
      {currentImage ? (
        <div style={{ marginTop: 12 }}>
          <div className="cat-description">
            <button
              onClick={() => toggleBan(breed)}
              style={{ opacity: isBanned(breed) ? 0.5 : 1 }}
            >
              {breed}
            </button>
            <button
              onClick={() => toggleBan(age)}
              style={{ opacity: isBanned(age) ? 0.5 : 1 }}
            >
              {age}
            </button>
            <button
              onClick={() => toggleBan(weight)}
              style={{ opacity: isBanned(weight) ? 0.5 : 1 }}
            >
              {weight}
            </button>
            <button
              onClick={() => toggleBan(origin)}
              style={{ opacity: isBanned(origin) ? 0.5 : 1 }}
            >
              {origin}
            </button>
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
