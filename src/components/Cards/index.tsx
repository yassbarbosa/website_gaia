import styles from "./Cards.module.css";

interface CardsProps {
  numero: string;
  titulo: string;
  texto: string;
  cor: string;
}

export default function Cards({ numero, titulo, texto, cor }: CardsProps) {
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
