import styles from "./CardsIntegrantes.module.css";

interface CardsInformativosProps {
  foto: string;
  nome: string;
  cargo: string;
}

export default function CardsIntegrantes({ foto, nome, cargo }: CardsInformativosProps) {
  return (
    <div className={styles.card}>
      <img src={foto} alt="fotoIntegrante" />

      <div className={styles.informacoesIntegrante}>
        <p className={styles.nomeIntegrante}>{nome}</p>
        <p className={styles.cargoIntegrante}>{cargo}</p>
      </div>
    </div>
  );
}
