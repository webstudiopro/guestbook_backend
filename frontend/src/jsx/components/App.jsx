import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){

    }
    render(){
        return (
            <main id="guestbook" className="container-fluid">
                <h1 className="page-header">Gastenboek</h1>
                <div className="card card-guestbook">
                    <div className="card">
                        <div className="col-xs-3 col-md-3">
                            <button className="btn btn-success btn-lg button-add"><i className="fa fa-plus-circle fa-3x"></i></button>
                        </div>
                        <div className="col-xs-9 col-sm-9">
                            <form action="#">
                                <div className="input-group">
                                    <label class="form-control-label" htmlFor="name">Naam:</label>
                                    <input id="name" type="text" className="form-control" />
                                </div>
                                <div className="input-group">
                                    <label class="form-control-label" htmlFor="email">Email:</label>
                                    <input id="email" type="text" className="form-control" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
