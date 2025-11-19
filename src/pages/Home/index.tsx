import styles from "./Home.module.css";
import { useThemeLogo } from "../../utils/useThemeLogo";
import Cards from "../../components/Cards";

export default function Home() {
  const logo = useThemeLogo("/logoPreto.svg", "/logoBranco.svg", {
    inverter: true,
  });

  return (
    <div className={styles.body}>
      <div className={styles.cardsInformativosBox}>
        <div className={styles.cardsInformativosTitulo}>
          <h1>Como funciona o</h1>
          <img src={logo} alt="logo" />
          <h1>?</h1>
        </div>

        <div className={styles.cardsInformativos}>
          <Cards
            numero="01"
            titulo="Receba a notificação"
            texto="o gatilho para uma jornada de mudança no mundo."
            cor="var(--red)"
          />
          <Cards
            numero="02"
            titulo="Use sua criatividade"
            texto="decida como você será um agente da mudança no mundo."
            cor="var(--green)"
          />
          <Cards
            numero="03"
            titulo="Prátique e engaje"
            texto="registre suas próprias ações e se conecte com uma comunidade engajada."
            cor="var(--purple)"
          />
        </div>
      </div>
    </div>
  );
}
