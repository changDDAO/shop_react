import React, {useEffect,useState} from 'react'
import {User} from '@firebase/auth';
import {AuthContext} from "./authContext";
import {auth} from "./firebase";


 function AuthProvider({children}:any){
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const subscribe = auth.onAuthStateChanged(fbUser => {
            console.log(`구독 실행`, fbUser);
            setUser(fbUser);
        });
        return subscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;