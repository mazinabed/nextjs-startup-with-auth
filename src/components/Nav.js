import Link from 'next/link';
export default function Index() {
    return(
<>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         
<ul className="navbar-nav">
        <li className="nav-item active">
        <a class="nav-link"> <Link href="/">Home</Link></a>
              </li>
        <li className="nav-item active">
        <a class="nav-link"><Link href="/signin">Signin</Link></a>
        </li>
        
        <li className="nav-item active">
           <a class="nav-link"> <Link href="/signup">Signup</Link></a>
        </li>
      </ul>
            </nav> 

            <div className="container">
                <div className="row">
                    <div className="col-12 offset-3">
                    <h1 className="title">nextjs-startup-with-auth</h1>
                    <p>You can use it as a start up for your app. Just Sign up first and then Sign in.</p>
                    </div>
                </div>
            
                </div> 


</>
    )
}