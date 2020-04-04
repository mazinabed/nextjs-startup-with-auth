import Head from 'next/head'
import Nav from '../components/Nav'




const Layout = (props)  => (

    <div>

        <Head>
            
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <Nav/>
        
        {props.children}
    
       
    </div>
)

export default Layout