import React, { Component, FormEvent } from "react";

interface User {
    id?: number;
    lastname: string;
    firstname: string;
    fathername: string;
    email: string;
    phone: string;
    post: string;
}

interface AddUserProps {
    user?: User;
    onAdd: (user: User) => void;
}

interface AddUserState {
    lastname: string;
    firstname: string;
    fathername: string;
    email: string;
    phone: string;
    post: string;
}

class AddUser extends Component<AddUserProps, AddUserState> {
    private myForm: HTMLFormElement | null = null;

    constructor(props: AddUserProps) {
        super(props);
        this.state = {
            lastname: "",
            firstname: "",
            fathername: "",
            email: "",
            phone: "",
            post: ""
        };
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el} onSubmit={this.handleSubmit}>
                <input placeholder="Фамилия" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })}/>
                <input placeholder="Имя" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })}/>
                <input placeholder="Отчество" value={this.state.fathername} onChange={(e) => this.setState({ fathername: e.target.value })}/>
                <input placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                <input placeholder="Номер телефона" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })}/>
                
                <select id="posts" name="posts" value={this.state.post} onChange={(e) => this.setState({ post: e.target.value })}>
                    <option hidden>Выберите должность</option>
                    <option>Инженер</option>
                    <option>Техник</option>
                    <option>Механик</option>
                    <option>Оператор</option>
                    <option>Начальник смены</option>
                </select>
                <button type="submit">Добавить</button>
            </form>
        );
    }

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const user: User = {
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            fathername: this.state.fathername,
            email: this.state.email,
            phone: this.state.phone,
            post: this.state.post,
        };

        if (this.props.user && this.props.user.id) {
            user.id = this.props.user.id;
        }

        this.props.onAdd(user);

        if (this.myForm) {
            this.myForm.reset();
        }

        this.setState({
            lastname: "",
            firstname: "",
            fathername: "",
            email: "",
            phone: "",
            post: ""
        });
    };
}

export default AddUser;
