import Header from './components/Header'
import Slider from "./components/Carrossel/Carrossel";
import Aplicativo from './components/Aplicativo/Aplicativo';

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

       <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
       <Aplicativo
        img="/imagemTelefone.png"
        titulo="Baixe já o GAIA!"
        texto="decida como você será um agente da mudança no mundo.
decida como você será um agente da mudança no mundo. decida como você será um agente da mudança no mundo.decida como você será um agente da mudança no mundo.decida como você será um agente da mudança no mundo."
        />
       </div>
    </>
  );
}
