import React, { Fragment } from 'react';
// import './HeaderBar.css';

const HeaderBar = (props) => {
    return (
        <Fragment>
            <div id="header-bar">
                {props.message}
            </div>
        </Fragment>
    );
}

// HeaderBar.defaultProps = {
//     message: 'gaada'
// }

export default HeaderBar;