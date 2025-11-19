import styles from "./Aplicativo.module.css";

type Props = {
  img: string;
  titulo: string;
  texto: string;
};

export default function Slider({ img, titulo, texto }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.foto}>
        <img src={img} alt={titulo} className={styles.imagem} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descricao}>{texto}</p>
      </div>
    </div>
  );
}
