import React, { useEffect, useState } from 'react';
import StoryView from './StoryView';
import { FetchService } from '../../service/FetchService';
import { Story } from '../../common/model/Story';
import { useLoaderData } from 'react-router-dom';

export async function loader() {

    const stories = await FetchService.fetch('story');

    return { stories };

}

const ReadContainer = () => {
    // @ts-ignore
    const { stories } = useLoaderData();
    const [story, setStory] = useState<Array<Story>>(stories);
    const [startStory, setStartStory] = useState<Story | undefined>(undefined);

    useEffect(() => {
        FetchService.fetch('story').then(data => {
            setStory(data as unknown as Story[]);
        });
    }, []);

    useEffect(() => {
        if (story) {
            setStartStory(story[0]);
        }
    }, [story]);

    return (
        <>
            {startStory ? <StoryView stories={story} startStory={startStory}/> : null}
        </>
    );
};

export default ReadContainer;
