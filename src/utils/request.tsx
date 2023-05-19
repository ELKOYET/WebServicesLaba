import { request } from "@umijs/max"

const myRequest = (url: string, opt: any = { method: 'GET' }) => {
    const token = localStorage.getItem('token');

    const head = opt?.headers ?? {};
    const authHead = {...head, Authorization: 'Bearer ' + token }
    const config = {...opt, headers: authHead}

    return request(url, config).then((result) => {
        return result;
    }).catch((error: Error) => {
        console.log(error)
        return undefined;

    })
};

export default myRequest;    
export {myRequest}