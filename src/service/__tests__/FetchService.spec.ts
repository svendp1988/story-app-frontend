import { FetchService } from '../FetchService';
import { BASE_URL } from '../../common/model/constants/URLConstants';
import { Story } from '../../common/model/Story';
import { DEFAULT_OPTIONS } from '../../common/model/constants/Constants';

describe('Fetch', function () {
    const URL_SUFFIX = 'story';

    beforeEach(() => {
        // @ts-ignore
        fetch.resetMocks();
    });

    it("should create correct fetch", async () => {
        // GIVEN
        const params: Map<string, string> = new Map([['objectId', 'test-object-id']]);
        const postOptions: RequestInit = { method: 'POST' };
        const body: Story = {
            text: 'Some Text',
            imageUrl: 'Some Image URL'
        };
        // @ts-ignore
        fetch.mockResponseOnce(JSON.stringify({ ...body, id: 'some-id', options: [] }));

        // WHEN
        await FetchService.fetch(URL_SUFFIX, params, postOptions, body);

        // THEN
        const expected = {
            url: BASE_URL + '/story?objectId=test-object-id',
            options: {
                ...DEFAULT_OPTIONS,
                method: 'POST',
                body: JSON.stringify(body)
            }
        };

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(expected.url, expected.options);
    });

});
