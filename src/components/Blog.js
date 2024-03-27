import React from 'react';
import "./Blog.scss";
import BlogBlock from "../elements/BlogBlock";
import blog1 from "../assets/blog1.svg";
import blog2 from "../assets/blog2.svg";
import blog3 from "../assets/blog3.svg";

function Blog() {
    return (
        <div className="container type1">
            <div className="bigTitle align-self-center">Блог</div>
            <div className="blog__block d-flex justify-content-between gap-2 align-items-stretch">
                <BlogBlock description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at nibh...." date="30.01.21" type="Новости" title="Lorem Ipsum" image={blog1}/>
                <BlogBlock description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at nibh...." date="30.03.21" type="Новости" title="Lorem Ipsum" image={blog2}/>
                <BlogBlock description="Lorem ipsum dolor sit amet, consectetur adipiscin...." date="01.04.21" type="Новости" title="Lorem Ipsum" image={blog3}/>
            </div>
        </div>
    );
}

export default Blog;