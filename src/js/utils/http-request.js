/**
 * Created by Artem on 04.09.2018.
 */

function status(response) {
    if ((response.status >= 200 && response.status < 300) || response.ok) {
        return Promise.resolve(response.json());
    }
    return Promise.reject(response);
}

function get(path) {
    return fetch(path, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(status);
}

export { get };
