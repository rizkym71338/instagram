import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import StoryCard from "../../molecules/cards/StoryCard";
import AlphaDev from "../../../assets/img/alpha-dev.jpg";
const Story = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 784 },
            items: 8,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 784, min: 464 },
            items: 6,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <div className="bg-white dark:bg-gray-700 mx-5 lg:mx-0 lg:mr-5 py-5 pl-3 rounded-sm border border-gray-300 dark:border-gray-600 transition ease-in-out duration-500">
                <Carousel responsive={responsive}>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>
                    <div>
                        <StoryCard
                            img={AlphaDev}
                        />
                    </div>

                </Carousel>
            </div>
        </>
    )
};

export default Story;