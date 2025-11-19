import styles from "./Footer.module.css";
import { useThemeLogo } from "../../utils/useThemeLogo";

export default function Footer() {
  const logo = useThemeLogo("/logoPreto.svg", "/logoBranco.svg", {
    inverter: true,
  });

  return (
    <footer className={styles.footer} id="contato">
      <img src={logo} alt="logo" className={styles.logo} />
      <hr className={styles.linha} />

      <div className={styles.infos}>
        <form className={styles.newsletter}>
          <label>se inscreva no nosso newsletter (; </label>
          <div className={styles.inputBox}>
            <input type="email" placeholder="exemplo@email.com" />
            <button type="submit">enviar</button>
          </div>
        </form>

        <div className={styles.contato}>
          <p>
            <strong>contato</strong>
          </p>
          <a href="mailto:suporte@appgaia.com.br">suporte@appgaia.com.br</a>
        </div>
      </div>

      <div className={styles.termos}>
        <a href="#">termos de uso</a>
      </div>
    </footer>
  );
}
