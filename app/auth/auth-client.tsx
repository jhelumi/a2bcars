"use client"
import {useState} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import LoginForm from "@/components/LoginForm";
import { signIn, signUp } from "@/lib/actions/auth-actions";

import Link from 'next/link';

import Image from "next/image"
import { Button } from "@/components/ui/button";

export default function AuthClientPage () {

    const [isLoading, setIsLoading] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

    const router = useRouter();
    const searchParams = useSearchParams();


    const handleSignUp = async (data: { email: string; password: string; name:string }) => {
        
        try {
            console.log("Data:", data.email, data.password, data.name);
                const result = await signUp(data.email, data.password, data.name);
                if(!result.user){
                    setError("Failed User Registration")
                }
                console.log("User Registered successfully");
                toast.success("User registered successfully");
            
            } catch (error) {
            toast.error('Failed Registration');
            console.log("ERROR: ", error)
            } finally {
            setIsLoading(false);
            }
    }

    const handleLogin = async (data: { email: string; password: string; }) => {
       
        setIsLoading(true);
        setError("")
        try {
            console.log("Date Received: ", data)
                const result = await signIn(data.email, data.password);
                if(!result.user){
                    setError("Invalid email or password")
                }
            router.replace("/admin")
            } catch (error) {
            toast.error('Login failed. Please try again.');
            console.log("ERROR: ", error)
            } finally {
            setIsLoading(false);
            }
  };
    return (
         <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">         
             <Link href="/" className="flex items-center space-x-2">
                <Image
                        className="dark:invert"
                        src="/a2blogo-reverse.svg"
                        alt="Vercel logomark"
                        width={120}
                        height={120}
                      />
          
          </Link>           
          
          </div>
          
          <h2 className="mt-6 text-3xl font-bold text-brand-gray">
            Sign in to A2B CARS
          </h2>
          <p className="mt-2 text-sm text-brand-gray">
             Reliable Airport Transfers & Executive Travel             
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-lg rounded-lg border border-blue-200">
          <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          
          {/* <div className="mt-6 p-4 bg-blue-50 rounded-md">            
            <Button onClick= { () => handleSignUp ({email:"masood@a2bcars.net", password:"Password@12345", name: "Masood Ahmed"})}>SignUp</Button>
          </div> */}
        </div>
      </div>
    </div>
    )
}