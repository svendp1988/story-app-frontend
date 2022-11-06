import { ArrayUtils } from '../ArrayUtils';
import { InvalidArgumentException } from '../../exceptions/InvalidArgumentException';

const stories = [
    {
        'id': 1,
        'text': 'This is the beginning of your story',
        'imageUrl': 'Some image url',
        'options': [2, 3]
    },
    {
        'id': 2,
        'text': 'This is the middle of your story',
        'imageUrl': 'Some image url',
        'options': [1, 3]
    },
    {
        'id': 3,
        'text': 'This is the end of your story',
        'imageUrl': 'Some image url',
        'options': [1, 2]
    }
];

describe('ArrayUtils', function () {
    let actual;
    let expected;

    it('should find in array', function () {
        actual = ArrayUtils.findInArray(stories, 'id', 2);
        expected = stories[1];

        expect(actual).toEqual(expected);
    });

    it('should not find in array', function () {
        actual = ArrayUtils.findInArray(stories, 'id', 5);
        expected = undefined;

        expect(actual).toBe(expected);
    });

    it('should handle unknow attribute', function () {
        expect(() => ArrayUtils.findInArray(stories, 'unknownAttr', 1)).toThrow(InvalidArgumentException);
    });
});
