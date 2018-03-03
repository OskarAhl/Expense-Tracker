import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        // return promise
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};