import { FormEvent, useEffect, useState } from 'react';
import useInput from './useInput';
import styles from './form.module.css';
import ButtonPopupForCall from '../ButtonPopup/ButtonPopupForCall';

export default function LoginForm({
    handlerTogglePopup,
}: {
    handlerTogglePopup: (e: any) => void;
}) {
    const name = useInput('', {
        isEmpty: true,
        minLength: 5,
        maxLength: 50,
        type: 'text',
    });
    const number = useInput('', {
        isEmpty: true,
        minLength: 6,
        type: 'number',
    });
    const checkbox = useInput('', {
        isEmpty: true,
        minLength: 0,
        type: 'checkbox',
    });
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const values = {
            name: name.value,
            number: number.value,
            checkbox: checkbox.checked,
        };
        localStorage.setItem('test', JSON.stringify(values));
        number.setValue('');
        name.setValue('');
        checkbox.setChecked(false);
        handlerTogglePopup(e);
    };

    return (
        <div className={styles.formContainer}>
            {
                <button
                    onClick={handlerTogglePopup}
                    className={styles.closeMenu}
                ></button>
            }
            <h2 className={styles.popupTitle}>Закажите обратный звонок</h2>
            <form
                className={styles.form}
                noValidate
                onSubmit={(e) => onSubmit(e)}
            >
                <input
                    className={styles.input}
                    name="name"
                    type="text"
                    maxLength={50}
                    minLength={7}
                    placeholder="ИМЯ"
                    onChange={name.onChange}
                    onBlur={name.onBlur}
                    value={name.value}
                />
                {name.isEmpty && name.isDirty && (
                    <span className={styles.spanError}>Введите Имя</span>
                )}

                <input
                    className={`${styles.input}
           ${number.isDirty ? styles.inputError : ''}`}
                    name="number"
                    maxLength={30}
                    minLength={6}
                    type="text"
                    placeholder="ТЕЛЕФОН"
                    onChange={number.onChange}
                    onBlur={number.onBlur}
                    value={number.value}
                />
                {number.isEmpty && number.isDirty && (
                    <span className={styles.spanError}>
                        Номер должен содержать 11 цифр
                    </span>
                )}
                <div className={styles.containerCheckbox}>
                    <input
                        onChange={checkbox.onChecked}
                        checked={checkbox.checked}
                        className={styles.checkbox}
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                    />
                    <label htmlFor="checkbox" className={styles.containerSpan}>
                        Согласен на сохранение и обработку персональных данных
                    </label>
                    <span className={styles.containerSpan}></span>
                </div>
                <div className={styles.consultationContainer}>
                    <ButtonPopupForCall
                        type="consultationItemBlue"
                        name="Заказать обратный звонок"
                        disabled={
                            !name.isValid ||
                            !number.isValid ||
                            !checkbox.isValid
                        }
                    />
                </div>
            </form>
        </div>
    );
}
