import logo from "./images/LogoNuevo-positivo__1_-removebg-preview.png";

const Error404 = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <p><img src={logo} alt="Robinet" width={"108"} /></p>
                    <h1>Error 404</h1>
                    <h3>La página que estás buscando no existe</h3>
                </div>
            </div>
        </div>
    )
}

export default Error404;