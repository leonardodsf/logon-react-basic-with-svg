import React from "react";
import "./styles.css";
import imgLogon from "../../assets/logon.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function Logon() {
  return (
    <div className="logon-container">
      <img src={imgLogon} alt="Image Logon" />
      <section className="form">
        <form>
          <h1>Faça seu Logon!</h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiArrowLeft size={20} color="#111" />
            Cadastra-se aqui
          </Link>
        </form>
      </section>
    </div>
  );
}
