import React from "react";
import User from "./User";

interface UserField {
    id: number;
    lastname: string;
    firstname: string;
    fathername: string;
    email: string;
    phone: string;
    post: string;
}

interface UsersProps {
    users: UserField[];
    onEdit: (user: any) => void;
    onDelete: (id: number) => void;
}

const Users: React.FC<UsersProps> = ({ users, onEdit, onDelete }) => {
    if (users.length > 0) {
        return (
            <div className="users_list">
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="head_row familia">Фамилия</th>
                                <th className="head_row username">Имя</th>
                                <th className="head_row">Отчество</th>
                                <th className="head_row">Email</th>
                                <th className="head_row phone_number">Телефон</th>
                                <th className="head_row post_name">Должность</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                {users.map((el) => (
                    <User onEdit={onEdit} onDelete={onDelete} key={el.id} user={el}/>
                ))} 
            </div>
        );
    } else {
        return (
            <div className="user">
                <h3>Пользователей нет</h3>
            </div>
        );
    }
};

export default Users;
