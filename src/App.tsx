import Header from './components/Header'
import Slider from "./components/Carrossel/Carrossel";

export default function App() {
  return (
    <>
      <Header />

      <div style={{ marginTop: "40px" }}>
        <Slider 
          slides={[
                { imagem: "/ambiental.png", titulo: "Ambiental",texto: "Práticas sustentáveis voltadas ao meio ambiente." },
                { imagem: "/governamental.png", titulo: "Governamental",texto: "Práticas sustentáveis voltadas ao meio ambiente." },
                { imagem: "/social.png", titulo: "Social",texto: "Práticas voltadas à responsabilidade social." },
  ]}
/>

      </div>
    </>
  );
}
