import '../index.css';

const Discover = ({banList, getImage}) => {
    return (
        <div className="discover-container">
            <button style={{marginTop: 12}} onClick={getImage}>
                Discover your new friend!
            </button>
        </div>
    )
}

export default Discover;