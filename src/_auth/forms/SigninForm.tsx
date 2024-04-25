
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { FaGoogle, FaFacebook } from 'react-icons/fa';


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SigninValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/shared/Loader";
import { useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"




  const SigninForm = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const { checkAuthUser, isLoading: isUserLoading} = useUserContext();

    const { mutateAsync: signInAccount} = useSignInAccount();
    
    // 1. Define your form.

    const form = useForm<z.infer<typeof SigninValidation>>({
      resolver: zodResolver(SigninValidation),
      defaultValues: {
        email:'',
        password:'',
      },
    });

  //  2. Define a submit handler.
  
  async  function onSubmit(values: z.infer<typeof SigninValidation>) {

    

      const session = await signInAccount({
        email: values.email,
        password: values.password,
      })
 
      

      if(!session){
        return toast({ title: 'Sign in failed. Please try again.'})
      }
        const isLoggedIn = await checkAuthUser();

        // console.log(isLoggedIn)

        if(isLoggedIn){
          form.reset();

          navigate('/')
        } else {
        return  toast({ title: 'Sign in failed. Please try again.'})
        }
    }
     
    return (
      
        <Form {...form}>

          <div className="sm:w-420 flex-center flex-col">

            <h2 className="h3-bold md:h2-bold  pt-5 sm:pt-12">Login to your account.</h2>
            <p className="text-light-3 small-mediun md:base-regular mt-2">Welcome back! , Please enter your details.</p>
         
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600" >Email</FormLabel>
                  <FormControl>
                    <Input type="email" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Password</FormLabel>
                  <FormControl>
                    <Input type="password" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                
              )}
            />
           <p className="cursor-pointer text-primary-500 hover:underline">Forgot your password?</p><br />
            <Button type="submit" className="shad-button_primary">{
              isUserLoading ? (
               <div className="flex-center gap-2">
                <Loader /> Loading...
               </div>
              ): "Sign in"
            }</Button>
            
              <br />
              <div className="flex items-center mt-2">
                 <hr className="w-full border-t border-gray-300" />
                 <span className="mx-4 text-gray-500">or</span>
                 <hr className="w-full border-t border-gray-300" />
              </div>
             <div className="flex gap-6 justify-center">
            <FaGoogle className="text-2xl text-blue-600 cursor-pointer" />
            <FaFacebook className="text-2xl text-blue-900 cursor-pointer" />
          </div>
            <p className="text-small-regular text-dark-1 text-center mt-2">Don't have an account yet?
            <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">Create an Account</Link></p>
          </form>
        </div>
       </Form>
      
      
    );
  };



export default SigninForm;


