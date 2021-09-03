import { Link, Route } from "react-router-dom";
import Comp2 from "./items2/comp2";
import Comp3 from "./items2/comp3";


function Info() {
    return(
    <>
    <section className="info">
        <div className="container">
            <div className="info-header">
                <p className="info-title">
                    Here you can search all information about this application
                </p>
                <ul>
                    {listItem}
                    <Link to="/info">Back to title</Link>
                </ul>
                <input type="text" onKeyUp={funcKey} ref={textInput} defaultValue="sdf"/>
                <h3 style={{marginTop:"10px"}} ref={textOut}></h3>: Сделано ссылкой на значение элемента
                <h2 style={{marginTop:"10px"}}>{stateText}</h2>: Сделано с помощью состояния
            </div>
        </div>
    </section>
    <Route path="/info/comp2">
        <Comp2/>
    </Route>
    <Route path="/info/comp3">
        <Comp3/>
    </Route>
    </>
    )
}
export default Info;