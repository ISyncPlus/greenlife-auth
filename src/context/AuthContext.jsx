import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../SupabaseClient";
const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined);

    // Sign Up
    const signUpNewUser = async ( email, password ) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if(error) {
            console.error("There was a problem signing up: ", error);
            return { success: false, error }
        } else {
            return { success: true, data }
        }

    };

    // Sign Out
    const signOut = () => {
        const { error } = supabase.auth.signOut();
        if(error) {
            console.error("There was an error: ", error);
        }
    }

    // Sign In
    const signInUser = async (email, password) => {
        try{
            const { data, error } = supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                console.error("Supabase Error: ", error);
                return { success: false, error }
            }
            console.log("Sign-in Success", data);
            return { success: true, data}
            
        } catch(error) {
            console.error("An error occured: ", error)
            return { success: false, error: error.message }
        }
    }

    useEffect(() => {
        supabase.auth.getSession().then(({data: { session}}) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ session, signUpNewUser,signInUser, signOut }} >
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}


