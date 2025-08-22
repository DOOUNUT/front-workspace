import axios from "axios"
import type { Menu } from "../type/menu";

const api = axios.create({
    baseURL : "http://localhost:8081/api",
    withCredentials : false
})

export const loadMenus = async function() {
     const response = await api.get("/menus"); 
     return response.data;
}

export const searchMenu = async function(searchKeyword:{type:string,taste:string}){
    const response = await api.get<Menu[]> ("/menus",{
        params : {
            type : searchKeyword.type ,
            taste : searchKeyword.taste
        }
    })
    return response.data
}