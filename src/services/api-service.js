export default class ApiService {


    _baseUrl = 'http://67.205.130.122/';
    // _baseUrl = 'http://localhost:8000/';
    _apiBase = `${this._baseUrl}api`;

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
    };

    _getToken = () => {
        try {
            return localStorage.getItem('Token');
        } catch (e) {
            return null;
        }
    };

    getProfileData = async (url, token) => {
        const result = await fetch(`${this._apiBase}${url}`, {
            method: 'get',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            })
        });
        if (!result.ok) {
            return {error: 'Auth error'}
        }
        return await result.json();
    };


    login = async (url, data) => {
        const result = await fetch(`${this._apiBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(data)
        });
        if (!result.ok) {
            return {error: 'Wrong password or email'}
        }
        return await result.json();
    };


    updateProfileData = async (url, body, token) => {
        const result = await fetch(`${this._apiBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        });
        if (!result.ok) {
            return {error: 'Wrong password or email'}
        }
        return await result.json();
    }


}