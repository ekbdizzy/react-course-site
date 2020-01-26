export default class ApiService {

    _apiBase = 'http://67.205.130.122/api';

    getData = async (url) => {
        const result = await fetch(`${this._apiBase}${url}`);
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, received ${result.status}`);
        }
        return await result.json();
    };

    getCourseList = async () => {
        const result = await this.getData('/course/list/');
        return result;
    }


}