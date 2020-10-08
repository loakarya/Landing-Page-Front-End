import React, { Fragment } from 'react';

const SubmitBtn = (props) => {
    return (
        <Fragment>
            <input className="btn btn-primary width--full" type="submit" value={props.value} onClick={props.onClick} />
        </Fragment>
    );
}

// HeaderBar.defaultProps = {
//     message: 'gaada'
// }

export default SubmitBtn;