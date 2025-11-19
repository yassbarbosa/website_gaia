import { useState, useEffect } from "react";
import styles from "./Carrossel.module.css";

type itemCarrossel = {
  imagem: string;
  titulo: string;
  texto: string;
};

type Carrossel = {
  slides: itemCarrossel[];
  intervalo?: number;
};

export default function Slider({ slides, intervalo = 3000 }: Carrossel) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalo);

    return () => clearInterval(timer);
  }, [slides.length, intervalo]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.carrossel}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className={styles.slideItem}>
            <img src={slide.imagem} className={styles.imagem} />

            {}
            <div className={styles.texto}>
              <h2>{slide.titulo}</h2>
              <h5>{slide.texto}</h5>
            </div>
          </div>
        ))}
      </div>

      {}
      <div className={styles.pontosNavegacao}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={`${styles.ponto} ${index === i ? styles.pontoAtual : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
