import React, {useState} from 'react';
import s from './Main.module.css';
import {Card} from "../Card/Card";


export const Main = () => {
    const [user, setUser] = useState('');

    return (
        <div className={s.container}>
            <div className={s.users__container}>
                <div className={s.users_block}>
                    <div className={s.users}>Users</div>
                </div>
                <div className={s.input}>
                    <input
                        className={s.input__place}
                        placeholder='Search'
                        type='text'
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                </div>
            </div>

            <div className={s.head}>
                <div className={s.username}>User Name</div>
                <div className={s.header}>
                    <div className={s.property}>View</div>
                    <div className={s.property}>Execute</div>
                    <div className={s.property}>Modify</div>
                    <div className={s.property}>Delete</div>
                </div>
            </div>
            <Card user={user}/>
        </div>
    );
};


