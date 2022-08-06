class Moviesapi {
    constructor({
        baseUrl
    }) {
        this._baseUrl = baseUrl
    }

    get _headers() {
        return {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        };
    }
    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: {
                "Content-Type": "application/json"
            },
        }).then(this._checkResponse);
    }


    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(res.status);
    }
}

export const moviesApi = new Moviesapi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});
