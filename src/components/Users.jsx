import React from "react"
import User from "./User"

class Users extends React.Component {

    render() {
        if(this.props.users.length > 0)
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
                    {this.props.users.map((el) => (
                        <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el}/>
                    ))} 
                </div>    
            )
        else
            return (
                <div className="user">
                   <h3>Пользователей нет</h3>
                </div>
            )
  }
}

export default Users