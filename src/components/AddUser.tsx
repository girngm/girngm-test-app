import React, { useState, useRef, FormEvent } from "react";

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

const AddUser: React.FC<AddUserProps> = ({ user, onAdd  }) => {
    const [lastname, setLastname] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
    const [fathername, setFathername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [post, setPost] = useState<string>("");

    const myForm = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const newUser: User = {
            lastname,
            firstname,
            fathername,
            email,
            phone,
            post,
        };

        if (user && user.id) {
            newUser.id = user.id;
        }

        onAdd(newUser);

        if (myForm.current) {
            myForm.current.reset();
        }

        setLastname("");
        setFirstname("");
        setFathername("");
        setEmail("");
        setPhone("");
        setPost("");
    };

    return (
        <form ref={myForm} onSubmit={handleSubmit}>
            <input placeholder="Фамилия" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <input placeholder="Имя" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <input placeholder="Отчество" value={fathername} onChange={(e) => setFathername(e.target.value)} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <select id="posts" name="posts" value={post} onChange={(e) => setPost(e.target.value)}>
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
};

export default AddUser;