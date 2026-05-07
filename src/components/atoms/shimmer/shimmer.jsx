import "./shimmer.scss";

const Shimmer = ({ type = 'circle' }) => {
    return (
        <div className={`shimmer-wrapper ${type ? type : ""}`}>
            <div className="shimmer"></div>
        </div>
    );
};

export default Shimmer;