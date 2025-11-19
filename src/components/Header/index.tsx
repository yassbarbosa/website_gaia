import styles from "./Header.module.css";
import { useThemeLogo } from "../../utils/useThemeLogo";

export default function Header() {
  const logo = useThemeLogo();

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />

      <div className={styles.links}>
        <a
          href="#impacto"
          className={styles.link}
          style={
            { ["--link-color" as any]: "var(--red)" } as React.CSSProperties
          }
        >
          impacto
        </a>
        <a
          href="#sobreNos"
          className={styles.link}
          style={
            { ["--link-color" as any]: "var(--green)" } as React.CSSProperties
          }
        >
          sobre nós
        </a>
        <a
          href="#contato"
          className={styles.link}
          style={
            { ["--link-color" as any]: "var(--purple)" } as React.CSSProperties
          }
        >
          contato
        </a>
      </div>
    </header>
  );
}
