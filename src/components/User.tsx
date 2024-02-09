import React, { Component } from "react";
import AddUser from "./AddUser";
import { TiDeleteOutline, TiCogOutline } from "react-icons/ti";

interface UserProps {
    user: {
        id: number;
        lastname: string;
        firstname: string;
        fathername: string;
        email: string;
        phone: string;
        post: string;
    };
    onDelete: (id: number) => void;
    onEdit: (user: any) => void;
}

interface UserState {
    editForm: boolean;
}

class User extends Component<UserProps, UserState> {
    constructor(props: UserProps) {
        super(props);
        this.state = {
            editForm: false
        };
    }

    render() {
        const { user } = this.props;

        return (
            <div className="user">
                <div className="block">
                    <div className="element">
                        <p className="row">{user.lastname}</p>
                    </div>
                    <div className="element pre-fathername">
                        <p className="row">{user.firstname}</p>
                    </div>
                    <div className="element pre-email">
                        <p className="row">{user.fathername}</p>
                    </div>
                    <div className="element">
                        <p className="row">{user.email}</p>
                    </div>
                    <div className="element phone">
                        <p className="row">{user.phone}</p>
                    </div>
                    <div className="element">
                        <p className="row">{user.post}</p>
                    </div>
                </div>
                <TiDeleteOutline onClick={() => this.props.onDelete(user.id)} className="delete-icon" />
                <TiCogOutline onClick={this.toggleEditForm} className="edit-icon" />
                {this.state.editForm && <AddUser user={user} onAdd={this.props.onEdit} />}
            </div>
        );
    }

    toggleEditForm = () => {
        this.setState(prevState => ({
            editForm: !prevState.editForm
        }));
    };
}

export default User;