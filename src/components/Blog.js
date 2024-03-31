import React, {useState} from 'react';
import "./Blog.scss";
import BlogBlock from "../elements/BlogBlock";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import img1 from "../assets/price1.jpg";
import img2 from "../assets/price2.jpg";
import img3 from "../assets/price3.jpg";

function Blog() {
    const blogs = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at nibh....",
            date: "30.01.21",
            type: "Новости",
            title: "Lorem Ipsum",
            image: blog1
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at nibh....",
            date: "30.03.21",
            type: "Новости",
            title: "Lorem Ipsum",
            image: blog2
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscin....",
            date: "01.04.21",
            type: "Новости",
            title: "Lorem Ipsum",
            image: blog3
        },
    ];
    const [circleActive, setCircleActive] = useState("1");
    return (
        <div className="my_container type1" id="blog">
            <div className="bigTitle align-self-center">Блог</div>
            <div className="blog__block d-flex justify-content-between gap-4 align-items-stretch">
                {blogs.map(item => (
                    <BlogBlock description={item.description} date={item.date} type={item.type} title={item.title}
                               image={item.image}/>
                ))}
            </div>
            <div className="blog__block--Mobile d-flex justify-content-between gap-4 align-items-stretch">
                    <div className="blogMobile">
                        {blogs.map(item => (
                        <BlogBlock description={item.description} date={item.date} type={item.type} title={item.title}
                                   image={item.image} id={item.id} active_id={circleActive}/>
                            ))}
                        <div className="blog__circles d-flex gap-4 justify-content-center">
                            {blogs.map(item => (
                            <div className={`circleBlog ${circleActive === item.id ? "circleBlog--active" : ""}`}
                                 onClick={() => setCircleActive(item.id)}></div>
                                ))}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Blog;