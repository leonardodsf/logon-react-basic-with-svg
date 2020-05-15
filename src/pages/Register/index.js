import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";
import imgRegister from "../../assets/register.svg";

export default function Register() {
  return (
    <div className="register-container">
      <img src={imgRegister} alt="Image Register" />
      <section className="form">
        <form>
          <h1>Crie sua conta gratuita!</h1>
          <input type="text" placeholder="Seu nome completo" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme sua senha" />
          <button className="button" type="submit">
            Cadastrar
          </button>
          <Link className="back-link-register" to="/">
            <FiLogIn size={20} color="#111" />
            Entrar com uma conta
          </Link>
        </form>
      </section>
    </div>
  );
}
