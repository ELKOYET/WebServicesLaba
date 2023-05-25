import  { myRequest } from "./utils/request";


export async function getInitialState() {
    let user

    try {
         user = await myRequest('https://localhost:44396/User/Index')
    }

    catch(error){
        console.log('...')
    }

    return user;
}
