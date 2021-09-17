import {Navbar} from "./app-scripts/comps/Navbar.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import {Info} from "./app-scripts/pages/Info"
import {Register} from "./app-scripts/pages/Reg"
import {Help} from "./app-scripts/pages/Help";
import {Home} from "./app-scripts/pages/Home";

export const App = () => (
<BrowserRouter>
    <Navbar/>

    <Route path="/info"><Info/>
    </Route>
    <Route path="/help"><Help/>
    </Route>
    <Route exact path="/"><Home/>
    </Route>
    <Route path="/login"><Register/>
    </Route>
</BrowserRouter>
)