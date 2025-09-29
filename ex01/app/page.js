import Link from 'next/link';
import Image from 'next/image';
import './maincss.css';

export default function Home() {
  return (
    <div>
      <h1>Lucas Mourato Aureliano de Melo</h1>
      <p>RA: 00000848725 | Estudante de C3 Unicap de 5º periodo | 22 anos de Idade</p>
      <Image src="/Assets/foto.jpg" alt="Foto do dito cujo" width="250" height="250"></Image><br />
      <i>Capre Diem - Horácio<sub>23 a.C</sub></i>
      <h2>Biografia:</h2>
      <p>
        Durante minha infância e adolescência, sempre gostei de videogames, passava minhas tardes jogando<br />e cresci com muitas das 
        minhas inspirações artisticas baseadas nisso, simliar a pessoas<br />que cresceram vendo flimes ou lendo livros.
        Mesmo assim, minha vida educacional nunca foi<br />gravemente afetada, mesmo com dificuldades em certos periodos de tempo
        sempre<br />mantive minhas notas iguais ou acima da média com eficiencia em Matemática e Inglês. <br />
        Ao me ingressar na faculdade, muitas das minhas dificuldades se ampliaram, graças a pandemia<br />que ocorreu durante o 3º ano
        do meu ensino médio e minha dificuldade em manter os estudos em dia<br />durante essa época me afetando durante meus anos seguintes,
        mesmo com esses impenclihos e<br />cadeiras problemas que tive durante o curso, ainda sigo em frente com intenção de completar
        o curso<br />de C3, para me provar capaz e ingressar na vida profissional.        
      </p>
      <h2>Capacidades</h2>
      <ul>
      <li>Programação em C e Java;</li>
      <li>Conhecimento basico de HTML-CSS;</li> 
      <li>Conhecimento avançado da língua inglesa;</li> 
      <li>Manejamento de projetos em grupo;</li>
      </ul>
      <h4>Referencias:</h4>
      <a href="https://www.linkedin.com/in/lucas-mourato-5b6a062b5/" target="_blank">
        LinkedIn
        <br/>
      </a>
      <Link href = "/jogodaforca" target="_blank">Jogo da forca</Link>
      <h4>poke</h4>
    </div>
  );
}