import React, { useState } from "react";
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

const User: React.FC<UserProps> = ({ user, onDelete, onEdit  }) => {
    const [editForm, setEditForm] = useState<boolean>(false);

    const toggleEditForm = () => {
        setEditForm(prevEditForm => !prevEditForm);
    };

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
            <TiDeleteOutline onClick={() => onDelete(user.id)} className="delete-icon" />
            <TiCogOutline onClick={toggleEditForm} className="edit-icon" />
            {editForm && <AddUser user={user} onAdd={onEdit} />}
        </div>
    );
};

export default User;
