'use server'
import axios from "axios";
import { redirect } from "next/navigation";

type UserType = {
    id: string;
    email: string;
    password: string;
};

const API_URL = "http://localhost:3001/users";

export const loginAction = async (formData: FormData) => {
    console.log("formData:", formData)
    try {
        const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`);
        const user: UserType = response.data[0]; 
        if (!user) {
            throw new Error("Invalid Credentials");
            //set user in the cookies 
            

        } 
        redirect('/contact');
    } catch (error) {
        throw new Error("Login failed");
    }

};

export const logout = async () => {
 redirect ('/login');
};

