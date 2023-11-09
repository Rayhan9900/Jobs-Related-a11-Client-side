import logo from '../../assets/logo12.jpg'

function Footer() {
    return (
        <footer className="footer p-10 bg-accent text-base-content">
            <aside>
                <img className='w-7/12 rounded-full' src={logo} alt="" />
                <h2 className="text-2xl text-fuchsia-700 font-bold">TO TO COMPANY</h2>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                Copyright © 2023 - All right reserved by To To Company Ltd
            </nav>
            <nav>
                <header className="footer-title">contact </header>

                <a className="link link-hover">Email:rayhanmahmud990099@gmail.com</a>
                <a className="link link-hover">phone:017********90</a>
            </nav>
            <nav>
                <header className="footer-title"> social media links</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <header className="footer-title">Address</header>
                <a className="link link-hover">Dhaka,uttora</a>
                <a className="link link-hover">Dhaka, mirpur 11</a>

            </nav>
        </footer>
    )
}

export default Footer