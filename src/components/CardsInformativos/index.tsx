import styles from "./CardsInformativos.module.css";

interface CardsInformativosProps {
  numero: string;
  titulo: string;
  texto: string;
  cor: string;
}

export default function CardsInformativos({ numero, titulo, texto, cor }: CardsInformativosProps) {
  return (
    <div
      className={styles.card}
      style={{
        background: `linear-gradient(40deg, ${cor}, color-mix(in srgb, ${cor} 45%, black))`,
      }}
    >
      <h1 className={styles.sombraNumero}>{numero}</h1>

      <h1 className={styles.numeroCard}>{numero}</h1>
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </div>
  );
}
