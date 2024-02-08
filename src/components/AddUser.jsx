import React from "react"


class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            lastname: "",
            firstname: "",
            fathername: "",
            email: "",
            phone: 1,
            post: ""
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Фамилия" onChange={(e) => this.setState({ lastname: e.target.value })}/>
                <input placeholder="Имя" onChange={(e) => this.setState({ firstname: e.target.value })}/>
                <input placeholder="Отчество" onChange={(e) => this.setState({ fathername: e.target.value })}/>
                <input placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })}/>
                <input placeholder="Номер телефона" onChange={(e) => this.setState({ phone: e.target.value })}/>
                
                <select id="posts" name="posts" onChange={(e) => this.setState({ post: e.target.value })}>
                    <option selected hidden>Выберите должность</option>
                    <option>Инженер</option>
                    <option>Техник</option>
                    <option>Механик</option>
                    <option>Оператор</option>
                    <option>Начальник смены</option>
                </select>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        lastname: this.state.lastname,
                        firstname: this.state.firstname,
                        fathername: this.state.fathername,
                        email: this.state.email,
                        phone: this.state.phone,
                        post: this.state.post,
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
            }   >Добавить</button>
            </form>
        )
    }
}

export default AddUser