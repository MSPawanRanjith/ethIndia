// External libraries
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "react-bootstrap";

// Containers
import LoanRequestsContainer from "../../../containers/LoanRequests";
import CreateLoanRequestContainer from "../../../containers/CreateLoanRequest";
import TokensContainer from "../../../containers/Tokens";
import LoanRequestContainer from "../../../containers/LoanRequest";
import HomeContainer from '../../../containers/homeContainer'
import ProjectContainer from '../../../containers/projectContainer'

// Styling
import "./Main.css";
import InvestmentsContainer from "../../../containers/Investments";

class Main extends Component {
    render() {
        return (
            <main className="Main">
                <Grid>
                    <Switch>
                        <Route path="/lend" component={LoanRequestsContainer} />
                        <Route path="/campaing" component={ProjectContainer} />
                        <Route path="/" exact={true} component={HomeContainer} />
                        <Route path="/create" component={CreateLoanRequestContainer} />
                        <Route path="/tokens" component={TokensContainer} />
                        <Route path="/request/:id" component={LoanRequestContainer} />
                        <Route path="/investments" component={InvestmentsContainer} />
                        {/* <Route path="/home" component={HomeContainer} /> */}
                    </Switch>
                </Grid>
            </main>
        );
    }
}

export default Main;
