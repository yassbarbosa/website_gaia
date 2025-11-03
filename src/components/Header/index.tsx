import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
    const [logo, setLogo] = useState("/logoPreto.svg");

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");

    const updateLogo = () => {
      setLogo(mediaQuery.matches ? "/logoPreto.svg" : "/logoBranco.svg");
    };

    updateLogo();

    mediaQuery.addEventListener("change", updateLogo);
    return () => mediaQuery.removeEventListener("change", updateLogo);
  }, []);

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo Gaia" className={styles.logo} />

            <div className={styles.links}>
                <a href="#">impacto</a>
                <a href="#">sobre nós</a>
                <a href="#">shop</a>
                <a href="#">contato</a>
            </div>
        </header>
    );
};
