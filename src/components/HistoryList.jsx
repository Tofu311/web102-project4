import "../index.css";

// const HistoryList = ({history = []}) => {
//     return (
//         <div className="historyList">
//             <h2>Who have we seen so far?</h2>
//             {history.length === 0 ? (
//                 <p>No cats seen yet!</p>
//             ) : (
//                 <ul className="history-container">
//                     {history.map((catUrl, idx) => {
//                         <li key={catUrl + idx}>
//                             <img
//                                 className="cat-pic"
//                                 src={catUrl}
//                                 alt="Random Image from Cat API"
//                                 width="50"
//                                 height="50"
//                             />
//                         </li>
//                     })}
//                 </ul>
//             )}
//         </div>
//     )
// }

const HistoryList = ({ history = [] }) => {
  return (
    <div className="historyList">
      <h2>Who have we seen so far?</h2>
      {history.length === 0 ? (
        <p>No cats seen yet!</p>
      ) : (
        <div className="history-container">
          {history.map((catUrl, idx) => (
            <div className="history-item" key={catUrl + idx}>
              <img
                className="history-thumb"
                src={catUrl}
                alt="Random Image from Cat API"
                width="50"
                height="50"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryList;
