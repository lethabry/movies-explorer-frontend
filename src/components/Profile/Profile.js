import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom"
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useForm from "../../hooks/useForm";
import "./Profile.css";

function Profile(props) {

  const user = React.useContext(CurrentUserContext);
  const { values: userState, setValues: setUserValues, handleChange: handleUserChange, errors: errorsState, isValid: isValid } = useForm({ name: '', email: '' });
  const [isChanging, setIsChanging] = React.useState(false);

  React.useEffect(() => {
    setUserValues({ name: user.name, email: user.email });
  }, [user]);

  React.useEffect(() => {
    const isValuesChanging = (userState.name !== user.name) || (userState.email !== user.email);
    setIsChanging(isValuesChanging);
  }, [userState]);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUserData(userState.name, userState.email);
  }

  console.log(userState, isChanging, isValid);

  return (
    <>
      <Header {...props} />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, {user.name}!</h1>
          <form className="profile__form form" method="post" onSubmit={handleSubmit}>
            <label className="profile__label" htmlFor="name">Имя
              <input className="profile__input" name="name" type={'text'} value={userState.name || ''} onChange={handleUserChange} minLength={2} maxLength={30} placeholder="Ваше имя" required />
            </label>
            <span className="profile__error">{errorsState.name}</span>
            <label className="profile__label" htmlFor="email">E-mail
              <input className="profile__input" name="email" id="email" type={'email'} value={userState.email || ''} onChange={handleUserChange} placeholder="Ваша почта" required />
            </label>
            <span className="profile__error">{errorsState.email}</span>
            <button className="profile__button" disabled={!isValid || (isValid && !isChanging)} aria-label="Кнопка редактирования профиля" type="submit" >{props.isLoading ? `Подождите...` : `Редактировать`}</button>
          </form>
          <Link to="/" className="profile__link" onClick={props.handleSignOut}>Выйти из аккаунта</Link>
        </section>
      </main>
    </>
  )
}

export default Profile
