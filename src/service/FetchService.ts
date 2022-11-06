import { DEFAULT_OPTIONS } from '../common/model/constants/Constants';
import { BASE_URL } from '../common/model/constants/URLConstants';

export class FetchService {

    private static readonly _PATH_SEPARATOR = '/';

    static fetch(url: string, params?: Map<string, string>, options?: RequestInit, body?: object): Promise<Response> {

        return fetch(this.constructUrl(url, params), this.constructOptions(options, body))
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            });
    }

    private static constructUrl(url: string, params?: Map<string, string>): string {
        if (!params) {
            return BASE_URL.concat(this._PATH_SEPARATOR + url);
        }
        let finalParams: string = '?';
        for (let [key, value] of Array.from(params)) {
            finalParams = finalParams.concat(key + '=' + value + '&');
        }
        finalParams = finalParams.slice(0, finalParams.length - 1);

        return BASE_URL.concat(this._PATH_SEPARATOR + url.concat(params.size > 0 ? finalParams : ''));
    }

    private static constructOptions(options?: object, body?: object): object {
        const jsonBody = JSON.stringify(body);
        let fetchOptions = Object.assign({}, DEFAULT_OPTIONS, options);

        return { ...fetchOptions, body: jsonBody };
    }
}
