export default class ApiService {

    _baseUrl = 'http://67.205.130.122/';
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
        return result.map(this._transformCourseData);
    };

    _getImageUrl = (img) => {
        return `${this._baseUrl}${img}`
    };

    _transformCourseData = (course) => {

        const {
            id, title, description, start_date,
            price, duration, icon
        } = course;

        return {
            id: id,
            title: title,
            description: description,
            startDate: start_date,
            price: price,
            duration: duration,
            icon: this._getImageUrl(icon)
        }
    }


}