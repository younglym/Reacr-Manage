import React from  'react';
//import CustomerDelete from './components/CustomerDelete';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

class Customer extends React.Component {
    render() {
        return (
        <div>
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>

            </TableRow>
        </div>
        )
    }
}
export default Customer;