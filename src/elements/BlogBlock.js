import React from 'react';
import "./BlogBlock.scss";

const BlogBlock = ({
                       id,
                       image,
                       date,
                       type,
                       title,
                       description,
                       active_id
                   }) => {
    return (
        <div className={`blogBlock ${id === active_id ? "" : "nonActive"}`}>
            <img alt="" src={image}></img>
            <div className="blogBlock__info">
                <div className="blogBlock__miniInfo d-flex justify-content-between">
                    <div className="blogBlock__type">{type}</div>
                    <div className="blogBlock__date">{date}</div>
                </div>
                <div className="blogBlock__title">{title}</div>
                <div className="blogBlock__description">{description}</div>
            </div>
        </div>
    );
}

export default BlogBlock;