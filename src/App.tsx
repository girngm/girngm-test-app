import React, { useState } from "react";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

interface User {
    id: number;
    lastname: string;
    firstname: string;
    fathername: string;
    email: string;
    phone: string;
    post: string;
}

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            lastname: "Иванов",
            firstname: "Иван",
            fathername: "Иванович",
            email: 'ivan.ivanov@yandex.ru',
            phone: "+7(904)5823423",
            post: "Директор"
        },
        {
            id: 2,
            lastname: "Петров",
            firstname: "Пётр",
            fathername: "Петрович",
            email: 'petr.petrov@yandex.ru',
            phone: "+7(951)5713279",
            post: "Администратор"
        }
    ]);

    const deleteUser = (id: number) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    };

    const editUser = (editedUser: User) => {
        setUsers(prevUsers => prevUsers.map(user => user.id === editedUser.id ? editedUser : user));
    };
    
    const addUser = (newUser: Omit<User, "id">) => {
        const id = users.length + 1;
        setUsers(prevUsers => [...prevUsers, { id, ...newUser }]);
    };

    return (
        <div>
            <div>
                <header className="header">
                    Справочник пользователей
                </header>
                <main>
                    <Users users={users} onEdit={editUser} onDelete={deleteUser} />
                </main>
                <aside>
                    <AddUser onAdd={addUser} />
                </aside>
            </div>
        </div>
    );
};

export default App;
