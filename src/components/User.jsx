import React from "react"
import AddUser from "./AddUser";
import { TiDeleteOutline, TiCogOutline } from "react-icons/ti";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className="user">
                <table className="users_table">
                    <tbody>
                        <tr>
                            <td className="row">{this.user.lastname}</td>
                            <td className="row">{this.user.firstname}</td>
                            <td className="row">{this.user.fathername}</td>
                            <td className="row">{this.user.email}</td>
                            <td className="row">{this.user.phone}</td>
                            <td className="row">{this.user.post}</td>
                        </tr>
                    </tbody>
                </table>
                    <TiDeleteOutline onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                    <TiCogOutline onClick={() => {
                        this.setState({
                            editForm: !this.state.editForm
                        })
                    }} className="edit-icon" />
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )
    }
}

export default User