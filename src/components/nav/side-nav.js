import React, {Component, Fragment} from 'react';

class Sidenav extends Component {

    componentDidMount() {
        M.Sidenav.init(this.navRef);
    }

    render() {
        return (
            <Fragment>
                <div className={"designs"}>TLC Designs</div>
                <ul ref={(element) => {this.navRef = element}} className={"sidenav show-on-small"} id={"side-nav"}>
                    {this.props.links}
                </ul>
            </Fragment>
        )
    }
}

export default Sidenav;