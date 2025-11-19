import styles from "./Aplicativo.module.css";

type Props = {
  img: string;
  titulo: string;
  texto: string;
};

export default function Slider({ img, titulo, texto }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img src={img} alt={titulo} className={styles.image} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.description}>{texto}</p>
      </div>
    </div>
  );
}
