import React, {useState} from 'react';
import "./BlogBlock.scss";
const BlogBlock = ({
                       image,
                       date,
                       type,
                       title,
                       description
                   }) => {
    const [circleActive, setCircleActive] = useState("1");
    return (
        <div className="blogBlock">
            <img alt="" src={image}></img>
            <div className="blogBlock__info">
                <div className="blogBlock__miniInfo d-flex justify-content-between">
                    <div className="blogBlock__type">{type}</div>
                    <div className="blogBlock__date">{date}</div>
                </div>
                <div className="blogBlock__title">{title}</div>
                <div className="blogBlock__description">{description}</div>
            </div>
            <div className="blog__circles d-flex gap-2 justify-content-center">
                <div className={`circleBlog ${circleActive === "1" ? "circleBlog--active" : ""}`} onClick={() => setCircleActive("1")}></div>
                <div className={`circleBlog ${circleActive === "2" ? "circleBlog--active" : ""}`} onClick={() => setCircleActive("2")}></div>
                <div className={`circleBlog ${circleActive === "3" ? "circleBlog--active" : ""}`} onClick={() => setCircleActive("3")}></div>
            </div>
        </div>
    );
}

export default BlogBlock;