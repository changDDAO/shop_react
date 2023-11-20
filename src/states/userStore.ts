import {create} from 'zustand';

type UserType={
    email: string;
    loginStatus: boolean;
    setStoreEmail:(email:string)=>void;
    setCleanEmail:()=>void;
    setLoginStatus:()=>void;
}

const UserStore = create<UserType>((set)=>({
    email: "",
    loginStatus: false,
    setCleanEmail:()=>{
        set((state)=>({
            email: "",
        }))
    },
    setLoginStatus:()=>{
        set((state)=>({
            loginStatus: !state.loginStatus
        }))
    },

    setStoreEmail:(email:string)=>{
      set((state)=>({
          email: email,
      }))
}
}));
export default UserStore;

