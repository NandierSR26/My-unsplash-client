export const peticion = ( data, method = 'GET' ) => {
    const urlGet = data.img;
    const urlPost = `${process.env.REACT_APP_BACKEND_URL}/upload-image`;

    if(method === 'GET'){
        return fetch(urlGet)
    } else {
        return fetch(urlPost, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        })
    }
}