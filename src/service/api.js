export const AuthFetch = async ({
    url,
    method,
    headers,
    body,
    typeResponse
}) => {
    const decifrado = atob(localStorage.getItem('pm-session') || '')
    const datosSession = decifrado == '' ? {} : JSON.parse(decifrado);
    const token = 'Bearer' + ' ' + datosSession?.token;

    const headersDefault = headers || {
        'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
        method: method || 'GET',
        headers: {
            ...headersDefault,
            'Authorization': token
        },
        body: body || null
    });

    if ([401].includes(Number(response.status))) {
        localStorage.clear();
        window.location.reload(false);
    }

    return await response[typeResponse || 'json']()
}