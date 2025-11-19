import styles from "./AppInfo.module.css";
import { useThemeLogo } from "../../utils/useThemeLogo";
import appleStore from "../../assets/applestore.png";
import playStore from "../../assets/playStore.png";

interface AppInfoProps {
  imagem: string;
};

export default function AppInfo({ imagem }: AppInfoProps) {
  const logo = useThemeLogo("/logoBranco.svg");

  return (
    <div className={styles.card}>
      <img src={imagem} alt="imagemApp" className={styles.imagem} />

      <div className={styles.info}>
        <div className={styles.titulo}>
          <h1>Baixe já o</h1>
          <img src={logo} alt="logo" />
          <h1>!</h1>
        </div>
        <p className={styles.descricao}>
          Decida como você será um agente da mudança no mundo.
        </p>

        <div className={styles.appsDownload}>
          <a href="#">
            <img src={playStore} alt="playStore" />
          </a>
          <a href="#">
            <img src={appleStore} alt="appleStore" />
          </a>
        </div>
      </div>
    </div>
  );
}
