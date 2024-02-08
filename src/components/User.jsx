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
                <div className="block">
                    <div className="element">
                        <p className="row">{this.user.lastname}</p>
                    </div>
                    <div className="element pre-fathername">
                        <p className="row">{this.user.firstname}</p>
                    </div>
                    <div className="element pre-email">
                        <p className="row">{this.user.fathername}</p>
                    </div>
                    <div className="element">
                        <p className="row">{this.user.email}</p>
                    </div>
                    <div className="element phone">
                        <p className="row">{this.user.phone}</p>
                    </div>
                    <div className="element">
                        <p className="row">{this.user.post}</p>
                    </div>
                </div>
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