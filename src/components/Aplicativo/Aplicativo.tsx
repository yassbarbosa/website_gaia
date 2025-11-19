import styles from "./Aplicativo.module.css";

type Props = {
  img: string;
  titulo: string;
  texto: string;
  imgPlayStore: string;
  imgAppStore: string;
};

export default function Slider({ img, titulo, texto, imgPlayStore, imgAppStore}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.foto}>
        <img src={img} alt={titulo} className={styles.imagem} />
      </div>

      <div className={styles.info}>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descricao}>{texto}</p>

      <div className={styles.imgBaixar}>
      <img src={imgPlayStore} alt="" />
      <img src={imgAppStore} alt="" />
      </div>
    </div>
    </div>
  );
}
