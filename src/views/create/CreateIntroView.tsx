import React, { useState } from 'react';
import { Button, Popconfirm, Select } from 'antd';
import { Option } from 'antd/es/mentions';

enum Age {
    Young_Kid = '0 - 6',
    Kid = '6 - 12',
    Teenager = '12 - 18',
    Young_Adult = '18 - 24',
    Adult = '24+'
}

enum StoryType {
    Fantasy,
    Horror,
    Novel,
    Romance,
    Detective,
    Thriller,
    Other
}

interface Story {
    age: Age,
    type: StoryType
}

enum QuestionAttributes {
    intro,
    age,
    type
}

const CreateIntroView: React.FC = () => {
    const [question, setQuestion] = useState<QuestionAttributes.intro | QuestionAttributes.age | QuestionAttributes.type>(QuestionAttributes.intro);

    const answers = new Map<QuestionAttributes, string>([[QuestionAttributes.age, ''], [QuestionAttributes.type, '']]);
    const setAnswer = (question: QuestionAttributes, answer: string) => answers.set(question, answer);

    const handleAnswer = (attribute: QuestionAttributes, value: string) => setAnswer(attribute, value);
    const switchQuestion = (type: QuestionAttributes) => setQuestion(type);
    const handleSubmit = () => console.log(answers);

    const views = new Map<QuestionAttributes, React.ReactElement>([
        [QuestionAttributes.intro, <>
            <h1>What follows are some simple questions that help us categorize your story.</h1>
            <br/>
            <h1>This in turn will help future readers who are looking for something specific.</h1>
            <br/>
            <h1>We advise you to take your time to answer this, as once this is filled in, it is not possible to change
                this
                later on.</h1>
            <Button onClick={() => switchQuestion(QuestionAttributes.age)}>Start questions.</Button>
        </>],
        [QuestionAttributes.age, <>
            <h1>First let's have a look at the age for which you want to write.</h1>
            <br/>
            <h1>You can choose between:</h1>
            <br/>
            <div>
                <Select
                    defaultValue={Age.Adult}
                    style={{ width: 120, display: 'inline-block' }}
                    onChange={value => handleAnswer(QuestionAttributes.age, value)}
                    options={Object.entries(Age).map(k => ({ value: k[0], label: k[1] }))}/>
                <h1 style={{ display: 'inline-block', marginLeft: '10px' }}>years</h1></div>
            <Button onClick={() => switchQuestion(QuestionAttributes.intro)}>Back</Button>
            <Button onClick={() => switchQuestion(QuestionAttributes.type)}>Next question</Button>
        </>],
        [QuestionAttributes.type, <>
            <h1>Next, let's define the type of story you want to write.</h1>
            <br/>
            <h1>You can choose between:</h1>
            <br/>
            <Select
                defaultValue={StoryType.Fantasy}
                style={{ width: 120, display: 'inline-block' }}
                onChange={value => handleAnswer(QuestionAttributes.type, value.toString())}
                options={Object.entries(StoryType).map(k => ({ value: k, label: k }))}/>
            <Button onClick={() => switchQuestion(QuestionAttributes.age)}>Back</Button>
            <Popconfirm title={'Are you sure you want to submit? You cannot come back here...'}
                        onConfirm={handleSubmit}>
                <Button onClick={handleSubmit}>Submit</Button>
            </Popconfirm>
        </>]
    ]);

    return (
        <>{views.get(question)}</>
    );
};

export default CreateIntroView;
