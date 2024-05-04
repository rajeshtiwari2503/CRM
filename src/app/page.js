 
import SignIn from "./sign_in/page";
import Sidenav from "./components/Sidenav";
import Dashboard from "./dashboard/page";
import { Toaster } from 'react-hot-toast';
 

 
 
 

export default function Home() {
  return (
    <main className="   ">
      {/* <SignIn /> */}
       
     <Dashboard />
     <Toaster />
    </main>
  )
}
