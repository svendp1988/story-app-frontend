import * as React from 'react';
import { useEffect, useState } from 'react';
import { ArrayUtils } from '../../common/utils/ArrayUtils';
import { Story } from '../../common/model/Story';
import { Card } from 'antd';

const StoryView = (props: StoryViewProps) => {
    const { stories, startStory } = props;
    const [story, setStory] = useState<Story>(startStory);
    const [nexStoryId, setNexStoryId] = useState<string>('');

    useEffect(() => {
        const story = ArrayUtils.findInArray(stories, 'id', nexStoryId);
        if (story) {
            setStory(story);
        }
    }, [stories, nexStoryId]);

    return (
        <Card
            title={story.text}
            bordered={false}
            style={{ width: '100%' }}
            cover={
                <img
                    alt="example"
                    src={story.imageUrl}
                />
            }
        >
            {
                story.options?.map((option: string) =>
                    (<Card.Grid
                        style={{ width: '50%' }}
                        onClick={() => setNexStoryId(option)}>
                        { ArrayUtils.findInArray(stories, 'id', option)?.text }
                    </Card.Grid>))
            }
        </Card>
    );
};

type StoryViewProps = {
    stories: Array<Story>,
    startStory: Story
}

export default StoryView;
