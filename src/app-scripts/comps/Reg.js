import "../../app-style/login.css"
import {RegData} from "./RegData"
export const Register = () =>(<>
        <section className="container _login">
            <div className="figure-word">We help to save your money</div>
            <div className="figure"></div>
            <div className="reg__title">Register</div>
            <RegData/>
            <p className="logined-p">You already registrated before? touch here</p>
        </section>
    </>
)