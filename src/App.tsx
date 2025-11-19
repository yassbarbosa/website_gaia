import Header from './components/Header';
import Home from './pages/Home';
import Slider from "./components/Carrossel/Carrossel";
import Aplicativo from "./components/Aplicativo/Aplicativo";

export default function App() {
  return (
    <>
      <Header />
      <Home />

      <div style={{ marginTop: "60px", marginBottom: "60px" }}>
        <Slider 
          slides={[
            { imagem: "/ambiental.png", titulo: "Ambiental", texto: "Práticas sustentáveis voltadas ao meio ambiente." },
            { imagem: "/governamental.png", titulo: "Governamental", texto: "Práticas que asseguram gestão responsável, transparente e alinhada a princípios éticos." },
            { imagem: "/social.png", titulo: "Social", texto: "Práticas voltadas à responsabilidade social." },
          ]}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
        <Aplicativo
          img="/imagemTelefone.png"
          titulo="Baixe já o GAIA!"
          texto="Decida como você será um agente da mudança no mundo.
decida como você será um agente da mudança no mundo. decida como você será um agente da mudança no mundo.decida como você será um agente da mudança no mundo.decida como você será um agente da mudança no mundo."
          imgPlayStore="/playstore.png"
          imgAppStore="/appStore.png"
        />
      </div>
    </>
  );
}
