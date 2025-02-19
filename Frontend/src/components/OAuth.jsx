import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase.js';
import {useDispatch} from 'react-redux';
import { signInSuccess } from '../../redux/userSlice.js'

const OAuth = () => {
    const dispatch = useDispatch();

    const handleGoogleClick  = async () => {
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth,provider);
            const res = await fetch('/api/auth/google',{
                method:'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    name : result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL,
                })
            });
            const data = await res.json(); 
            dispatch(signInSuccess(data));
        }catch(error){
            console.log("Could Not Login With Google",error);
        }
    }
  return (
    <button type="button" onClick={handleGoogleClick} className="bg-red-700 text-white p-3 hover:opacity-95 rounded-lg uppercase">Continue With Google</button>
  )
}

export default OAuth