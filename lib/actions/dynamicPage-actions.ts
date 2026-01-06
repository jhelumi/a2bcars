"use server";
import {auth} from "../auth";
import {headers} from "next/headers";


export const save = async(address:string,  title:string, keywords:string, contents:string) =>{
const result = await auth.api.signUpEmail({
    body :{
        email, 
        password, 
        name, 
        callbackURL: "/admin"
    }
});

return result;
}

