import "../index.css";

const BanList = ({ banList, toggleBan }) => {
  return (
    <div className="banList">
      <h2>Ban List</h2>
      <h4>Select an attribute in your listing to ban it</h4>
      <div className="banList-items">
        {banList && banList.length > 0 ? (
          banList.map((b) => (
            <div key={b} className="ban-item">
              <button onClick={() => toggleBan(b)} className="ban-item-button">
                {b}
              </button>
            </div>
          ))
        ) : (
          <div style={{ opacity: 0.6 }}>No banned attributes</div>
        )}
      </div>
    </div>
  );
};

export default BanList;
