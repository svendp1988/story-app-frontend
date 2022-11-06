import { Button, Carousel, Col, Grid } from 'antd';
import React, { useRef } from 'react';
import { CarouselRef } from 'antd/lib/carousel';
import { NavLink } from 'react-router-dom';
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';

const contentStyle: React.CSSProperties = {
    height: '80vh',
    color: '#fff',
    textAlign: 'center',
    paddingTop: '100px'
};

const HomeView: React.FC = () => {

    const sliderRef = useRef<CarouselRef>(null);

    return (
        <div>
            <Button size={'large'} style={{position: 'absolute', left: 250, top: 500}} shape="circle" icon={<LeftCircleTwoTone/>}
                    onClick={() => sliderRef.current?.prev()}/>
            <Carousel ref={sliderRef}>
                <div>
                    <h1 style={contentStyle}>
                        <span><h1>Welcome to create your own story!</h1></span> The app where you decide how the
                        story
                        goes.
                        <br/>
                        <br/>
                        You can chose to create your own story, contribute to a story in progress
                        <br/>
                        or you can read one of the stories already created.
                    </h1>
                </div>
                <div>
                    <h2 style={contentStyle}><span><h1>Create your own story</h1></span>
                        <br/>Here you can start from scratch. There are just a few things to keep in mind:
                        <br/>
                        <br/>
                        <ul>
                            <li> Before starting on a story you will be asked to select a theme and a target age.
                            </li>
                            <li>Each paragraph in your story can have up to 250 characters.</li>
                            <li>Each paragraph can have between 1 or 2 options, creating possible story lines or
                                "branches" as we call them.
                            </li>
                            <li>You can add image urls you find on the internet to give your story some visual
                                features.
                            </li>
                            <li>Each level in your story can have at most 8 branches at each given moment.</li>
                            <li>People who read your story can give your story a thumbs up or down. The more votes
                                your story gets, the more
                                we will suggest it to others.
                            </li>
                            <li>
                                Other people can also tag paragraphs in your story for being inappropriate.
                                <br/> If after investigation the paragraph is deemed inappropriate, it and all its
                                children will be removed.
                            </li>
                            <li>With this limited set of rules, please enjoy and let your imagination flow.</li>
                        </ul>
                        <NavLink to={'/create'}>Go Create!</NavLink>
                    </h2>
                </div>
                <div>
                    <h2 style={contentStyle}><span><h1>Contribute on a story</h1></span>
                        <br/>Here you can work on a story together. The same rules as before apply:
                        <br/>
                        <br/>
                        <ul>
                            <li> Before starting on a story you will be asked to select a theme and a target age.
                            </li>
                            <li>Each paragraph in your story can have up to 250 characters.</li>
                            <li>Each paragraph can have either one or 2 options, creating possible story lines or
                                "branches" as we call them.
                            </li>
                            <li>You can add image urls you find on the internet to give your story some visual
                                features.
                            </li>
                            <li>Each level in your story can have at most 8 branches at each given moment.</li>
                            <li>Other people can up- or downvote on your story, the more votes your story gets, the
                                more
                                we will suggest it to others.
                            </li>
                            <li>
                                Other people can also tag paragraphs in your story for being a number of reasons.
                                <br/> If after investigation the paragraph is deemed inappropriate, it and all its
                                children will be removed.
                            </li>
                            <li>With this limited set of rules, please enjoy and let your imagination flow.</li>
                        </ul>
                        <NavLink to={'/contribute'}>Go Contribute!</NavLink>
                    </h2>
                </div>
                <div>
                    <h2 style={contentStyle}><span><h1>Read a story</h1></span>
                        <br/>Here you can read stories written by others. When/after reading you can:
                        <br/>
                        <br/>
                        <ul>
                            <li>Tag certain paragraphs for being inappropriate. An admin will then investigate and
                                can
                                decide to remove a paragraph and all of its children with it.
                            </li>
                            <li>Give a thumbs up or down on the story you read. Thus voting a story up or down in
                                the ranking.
                            </li>
                            <li>We hope you enjoy the stories...</li>
                        </ul>
                        <NavLink to={'/read'}>Go Read!</NavLink>
                    </h2>
                </div>
            </Carousel>
            <Button size={'large'} style={{position: 'absolute', right: 250, top: 500}} shape="circle" icon={<RightCircleTwoTone/>}
                    onClick={() => sliderRef.current?.next()}/>
        </div>
    );
};

export default HomeView;
