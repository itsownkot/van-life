import React from 'react';
import {
  useLocation,
  useNavigate,
  useNavigation,
  useActionData,
  Form,
} from "react-router-dom";
import { loginUser } from "../api";

export async function action({ request }) {
   const formData = await request.formData();
   const email = formData.get('email')
   const password = formData.get('password')

   try {
      const data = await loginUser({ email, password });
      localStorage('loggedIn', true);
      return data
   } catch (err) {
      return {
         error: err.message
      }
   }
}

function Login() {
   const data = useActionData();
   const location = useLocation();
   const navigate = useNavigate();
   const navigation = useNavigation();
   const from = location.state?.from || '/host'; 

   if (data?.token) {
      navigate(from, {replace: true})
   }

   return (
     <div className="login-container">
         {location.state?.message &&
            <h1 className='login-error'>{location.state.message}</h1>
         }
         <h1>Sign in to your account</h1>
         {data?.error &&
            <h3 className='data-error'>{data.error}</h3>   
         }
         <Form 
            action="/login" 
            method="post" 
            className="login-from"
         >
            <input
                    name="email"
                    type="email"
                    placeholder="Email address"
            />
            <input
               name="password"
               type="password"
               placeholder="Password"
            />
            <button disabled={navigation.state === 'submitting'}>
               {navigation.state === 'submittin' ?
                  'Logging in...'
                  : 'Log in'
               }
            </button>
         </Form>
     </div>
   );
}

export default Login