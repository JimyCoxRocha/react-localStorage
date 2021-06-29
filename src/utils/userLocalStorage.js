export const existUserLocalStorage = ( email, password ) => {
    const PASS_CORRECT = true;
    const PASS_INCORRECT = false;
    const USER_NO_EXIST = false;

    try{
        const localPass = localStorage.getItem(`user`);
        
        if ( !!localPass ){
            const user = JSON.parse(localPass) || " ";

            if( user.password === password ){
                return PASS_CORRECT;
            }else{
                return PASS_INCORRECT;
            }
        }else{
            return USER_NO_EXIST;
        }

    }catch( err){
        console.log(err);
    }
}

export const saveUserLocalStorage = ( email, password ) => {
    try{
        localStorage.setItem(`user`, '{"email":"'+email+'","password":"'+password+'","logged":"true"}');
    }catch( err ){
        return err;
    }
}

export const viewLogged = ( ) => {
    const USER_NO_LOGGED = false;
    try{
        const localPass = localStorage.getItem(`user`);
        
        if ( !!localPass ){
            const user = JSON.parse(localPass) || " ";

            if( user.logged === "true" ){
                return user;
            }else{
                return USER_NO_LOGGED;
            }
        }else{
            return USER_NO_LOGGED;
        }

    }catch( err){
        console.log(err);
    }
}

export const loggedUserLocalStorage = () => {
    try{
        const localPass = localStorage.getItem(`user`);
        if ( !!localPass ){
            const user = JSON.parse(localPass) || " ";
            if( user.logged === "true" ){
                localStorage.setItem(`user`, '{"email":"'+user.email+'","password":"'+user.password+'","logged":"false"}');
            }
        }
    }catch( err ){
        return err;
    }
}