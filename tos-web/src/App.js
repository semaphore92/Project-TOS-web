import { connect } from "react-redux";


function App(props){

    return (
        <div className="App">
            <header className="App-header">
                <p>{props.count}</p>
            </header>
        </div>
    );
}

function makeProps(state){
    return {
        count : state
    }
}

export default connect(makeProps)(App);