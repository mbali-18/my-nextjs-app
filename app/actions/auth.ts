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
    console.log("user")
    try {
        const email = encodeURIComponent(String(formData.get("email") ?? ""));
        const password = encodeURIComponent(String(formData.get("password") ?? ""));
        const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
        const data = response.data;
        const user: UserType | undefined = Array.isArray(data) ? data[0] : data;
        if (!user) {
            throw new Error("Invalid credentials");
        }
        redirect('/contact');
    } catch (error) {
        console.error("loginAction error:", error);
        if (error instanceof Error) throw error;
        throw new Error("Login failed");
    }

};

export const logout = async () => {
 redirect ('/login');
};

