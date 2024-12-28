import { createContext, useEffect, useState } from "react";
import { authService } from "../service/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext=createContext();


const AuthProvider=({children})=>{

    const [userToken,setUserToken]=useState(null);

    const login=async ({token})=>{
        try {
            setUserToken(token);
            await AsyncStorage.setItem("userToken",token);
            console.log(token)
        } catch (error) {
            console.log(error)
        }
    }

    const logout=async ()=>{
        try {
            setUserToken(null);
            await AsyncStorage.removeItem("userToken")
        } catch (error) {
            console.log(error)
        }
    }

    const check=async ()=>{
        try {
            const token=await AsyncStorage.getItem("userToken");
            setUserToken(token)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        check();
    },[userToken])

    return <AuthContext.Provider value={{userToken,login,logout}}>
        {children}
    </AuthContext.Provider>
}

export {AuthContext}


export default AuthProvider;