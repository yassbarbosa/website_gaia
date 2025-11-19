import styles from "./Header.module.css";
import { useThemeLogo } from "../../utils/useThemeLogo";

export default function Header() {
  const logo = useThemeLogo();

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />

      <div className={styles.links}>
        <a href="#">impacto</a>
        <a href="#">sobre nós</a>
        <a href="#">shop</a>
        <a href="#">contato</a>
      </div>
    </header>
  );
}
