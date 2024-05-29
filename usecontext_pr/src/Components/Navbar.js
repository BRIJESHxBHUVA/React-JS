import React,{useContext} from 'react'
import createcontext from '../CreateContext'

const Navbar = () => {

    const {mode, differentMode} = useContext(createcontext)

    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor: 'black'}}>
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#" style={{fontSize: '35px'}}>Matias</a>
                <button className="navbar-toggler" style={{backgroundColor: 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color: 'black'}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">ABOUT</a>
                        </li>
                       
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-disabled="true">WORK</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-light" aria-disabled="true">SERVICES</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-light" aria-disabled="true">BLOG</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-light" aria-disabled="true">CONTACT</a>
                        </li>

                    </ul>

                    <form class="d-flex" role="search">
                     <button class="btn btn-outline-success" type="submit" onClick={()=>differentMode()} style={{backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white'}}>Mode</button>
                    </form>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
