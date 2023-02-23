import React from 'react';
import s from './Card.module.css'
import {initialData} from '../Main/initialData'

export const Card = ({user}) => {

    return (
        <div className={s.container}>
            <div className={s.card}>
                {initialData
                    .filter(item => {
                        if (!user) return true;
                        if (item.userName.toLowerCase().includes(user.toLowerCase())) {
                            return true;
                        }
                        return false;
                    })
                    .map(item => (
                        <div key={item.id} className={s.cards}>
                            <span className={s.dot}>
                            </span>
                            <div className={s.username}>
                                {item.userName}
                            </div>
                            <div className={s.input__block}>
                                <input
                                    type="checkbox"
                                    name="dark"
                                    id="dark"
                                    value="dark"
                                    className={s.input__button}

                                />
                                <input
                                    type="checkbox"
                                    name="dark"
                                    id="dark1"
                                    value="dark1"
                                    className={s.input__button}

                                />
                                <input
                                    type="checkbox"
                                    name="dark"
                                    id="dark2"
                                    value="dark2"
                                    className={s.input__button}

                                />
                                <input
                                    type="checkbox"
                                    name="dark"
                                    id="dark3"
                                    value="dark3"
                                    className={s.input__button}

                                />
                            </div>
                        </div>
                    ))}
            </div>
            <div className={s.button__block}>
                <button className={s.button}><span className={s.button__color}>Save</span></button>
            </div>
        </div>
    );
};


