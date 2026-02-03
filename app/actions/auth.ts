'use server'
import axios from "axios";
import { redirect } from "next/navigation";

type UserType = {
    id: string;
    email: string;
    password: string;
};

const API_URL = "http://localhost:3001/users";

export const login = async (formData: FormData) => {
    try {
        const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`);
        const user: UserType 
    } catch (error) {

    }

};

export const logout = () => {
 redirect ('/login');
};

