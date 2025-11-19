import styles from "./Home.module.css";
import { useThemeLogo } from "../../utils/useThemeLogo";
import CardsInformativos from "../../components/CardsInformativos";
import Carrosel from "../../components/Carrossel";
import CardsIntegrantes from "../../components/CardsIntegrantes";
import AppInfo from "../../components/AppInfo";
import ambiental from "../../assets/ambiental.png";
import governamental from "../../assets/governamental.png";
import social from "../../assets/social.png";
import fotoMirella from "../../assets/mirella.png";
import appCelular from "../../assets/imagemTelefone.png";

export default function Home() {
  const logo = useThemeLogo("/logoPreto.svg", "/logoBranco.svg", {
    inverter: true,
  });

  return (
    <div className={styles.body}>
      <div className={styles.textoInicialBox}>
        <h1>
          Salvando o mundo,
          <br />
          uma foto de cada vez
        </h1>
        <p>
          Acreditamos que a educação é a chave para construir um futuro mais
          sustentável e inclusivo.
          <br />
          Através de pequenas ações diárias, vamos criar um futuro sustentável
        </p>
      </div>

      <div className={styles.cardsInformativosBox} id="impacto">
        <div className={styles.cardsInformativosTitulo}>
          <h1>Como funciona o</h1>
          <img src={logo} alt="logo" />
          <h1>?</h1>
        </div>

        <div className={styles.cardsInformativos}>
          <CardsInformativos
            numero="01"
            titulo="Receba a notificação"
            texto="o gatilho para uma jornada de mudança no mundo."
            cor="var(--red)"
          />
          <CardsInformativos
            numero="02"
            titulo="Use sua criatividade"
            texto="decida como você será um agente da mudança no mundo."
            cor="var(--green)"
          />
          <CardsInformativos
            numero="03"
            titulo="Prátique e engaje"
            texto="registre suas próprias ações e se conecte com uma comunidade engajada."
            cor="var(--purple)"
          />
        </div>
      </div>

      <div className={styles.carroselBox}>
        <h1>Engaje nos 3 meios...</h1>
        <Carrosel
          slides={[
            {
              imagem: ambiental,
              titulo: "Ambiental",
              texto: "Práticas sustentáveis voltadas ao meio ambiente.",
            },
            {
              imagem: governamental,
              titulo: "Governamental",
              texto: "Práticas que asseguram gestão responsável, transparente e alinhada a princípios éticos.",
            },
            {
              imagem: social,
              titulo: "Social",
              texto: "Práticas voltadas à responsabilidade social.",
            },
          ]}
        />
      </div>

      <div className={styles.cardsIntegrantesBox} id="sobreNos">
        <div className={styles.integrantesTitulo}>
          <h1>Quem fez o</h1>
          <img src={logo} alt="logo" />
          <h1>acontecer</h1>
        </div>

        <div className={styles.cardsIntegrantes}>
          <CardsIntegrantes
            foto={fotoMirella}
            nome="ana"
            cargo="dev back-end"
          />
          <CardsIntegrantes
            foto={fotoMirella}
            nome="nana"
            cargo="dev front-end + ux"
          />
          <CardsIntegrantes
            foto={fotoMirella}
            nome="mary"
            cargo="social media"
          />
          <CardsIntegrantes
            foto={fotoMirella}
            nome="mirella"
            cargo="adm + ux"
          />
          <CardsIntegrantes
            foto={fotoMirella}
            nome="rafa"
            cargo="dev front-end"
          />
        </div>
      </div>

      <div className={styles.appInfoBox}>
        <AppInfo imagem={appCelular} />
      </div>
    </div>
  );
}
