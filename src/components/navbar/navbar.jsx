import React from "react"
import "./navbar.scss"

const Navbar = () => {

    const [active,setActive] = useState(false)
    return (
        <div className={active ? "navbar active" : 'navbar'}>
            <div className="container">
                <div className="logo">
                    {/* <Link to="/"> */}
                        <span className='text'>Desixn</span>
                    {/* </Link> */}
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Desixn Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    <span>Become a Seller</span>
                    <button>Join</button>
                </div>
            </div>
                <hr />
                <div className="menu">
                    <span>Test</span>
                    <span>Test2</span>
                    <span>Test3</span>
                    <span>Test4</span>
                    <span>Test5</span>
                </div>
        </div>
    );
};

export default Navbar