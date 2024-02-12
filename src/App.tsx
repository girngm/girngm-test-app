import React, { Component } from "react";
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

interface AppState {
    users: User[];
}

class App extends Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            users: [
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
            ]
        };
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    
    render() {
        return (
            <div>
                <div>
                    <header className="header">
                        Справочник пользователей
                    </header>
                    <main>
                        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
                    </main>
                    <aside>
                        <AddUser onAdd={this.addUser} />
                    </aside>
                </div>
            </div>
        );
    }

    deleteUser(id: number) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        });
    }

    editUser(user: User) {
        let allUsers = this.state.users.slice();
        allUsers[user.id - 1] = user;
        this.setState({ users: [] }, () => {
            this.setState({ users: [...allUsers] });
        });
    }
    
    addUser(user: Omit<User, "id">) {
        const id = this.state.users.length + 1;
        this.setState({ users: [...this.state.users, { id, ...user }] });
    }
}

export default App;
