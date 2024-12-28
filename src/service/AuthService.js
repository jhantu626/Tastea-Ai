import axios from "axios";

class AuthService{
    constructor(){
        this.baseUrl=process.env.API_URL;
    }

    async signup({email,password}){
        const uri=`${this.baseUrl}/api/v1/auth/register`;
        try {
            console.log("signup")
            const response=await axios.post(uri,{
                email: email,
                password: password
            })
            console.log("signup completed")
            const data=await response.data;
            return data;
        } catch (error) {
            const data=await error.response.data;
            return data;
        }
    }
    
    async login({email,password}){
        const uri=`${this.baseUrl}/api/v1/auth/login`;
        try {
            const response=await axios.post(uri,{
                email: email,
                password: password
            })
            const data=await response.data;
            return data;
        } catch (error) {
            console.log(error)
            const data=await error.response.data;
            return data;
        }
    }

}

const authService=new AuthService();

export {authService}