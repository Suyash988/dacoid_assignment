import { Routes, Route } from 'react-router-dom'

import './globals.css'
import SigninForm from './_auth/forms/SigninForm'
import { Explore,  Saved} from './_root/pages'
import SignupForm from './_auth/forms/SignupForm'
import Authlayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Toaster } from "@/components/ui/toaster"
import Goals from './_auth/forms/Goals'
import First from './_auth/forms/First'
import Second from './_auth/forms/Second'




const App = () => (
    <main className='flex h-screen'>
        
        <Routes>  
            

            {/* public routes */}
            <Route element={<Authlayout />}>
                 <Route path='/first' element={<First />} />
                 <Route path='/sign-up' element={<Second />} />
                 <Route path='/sign-in' element={<SigninForm />} />
                 <Route path='/sign-up' element={<SignupForm />} />
                
            </Route>
            
            {/* private routes */}

           <Route element={<RootLayout/>}>
         
              <Route index element={<Goals />} />
              {/* <Route  path="/home" element={<Home />} /> */}
              <Route  path="/explore" element={<Explore/>} />
              <Route  path="/saved" element={<Saved/>} />
              

           </Route>
           
            
        </Routes>

        <Toaster/>

    </main>
)

export default App