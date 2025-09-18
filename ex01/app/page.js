import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Lucas Mourato Aureliano de Melo</h1>
      <p>RA: 00000848725 | Estudante de C3 Unicap de 5º periodo | 22 anos de Idade</p>
      <img src="https://media.licdn.com/dms/image/v2/D4E03AQFYNW8K7zavWQ/profile-displayphoto-crop_800_800/B4EZjJN5aGHIAI-/0/1755722521089?e=1758758400&v=beta&t=fE9SdhydvdrHaPI36ect_FW1ts5kE8gR5Ze4sKgF38w"
      alt="Foto do dito cujo" width="250" height="250"></img>
      <hr/>
      <audio src="/Assets/Bellhart-OST-EXTENDED-Hollow-Knight-Silksong.mp3" control loop muted>theme song</audio>
      <h2>Bio:</h2>
      <p>
        Durante minha infância e adolescência, sempre gostei de videogames, passava minhas tardes jogando<br />e cresci com muitas das 
        minhas inspirações artisticas baseadas nisso, similar a pessoas<br />que cresceram vendo filmes ou lendo livros.
        Mesmo assim, minha vida educacional nunca foi<br />gravemente afetada, mesmo com dificuldades em certos periodos de tempo
        sempre<br />mantive minhas notas iguais ou acima da média com eficiencia em Matemática e Inglês. <br />
        Ao me ingressar na faculdade, muitas das minhas dificuldades se ampliaram, graças a pandemia<br />que ocorreu durante o 3º ano
        do meu ensino médio e minha dificuldade em manter os estudos em dia<br />durante essa época me afetando durante meus anos seguintes,
        mesmo com esses impencilhos e<br />cadeiras problemas que tive durante o curso, ainda sigo em frente com intenção de completar
        o curso<br />de C3, para me provar capaz e ingressar na vida profissional.        
      </p>
      <hr/>
      <h3>Capacidades</h3>
      <p>
        * Programação em C e Java;<br/>
        * Conhecimento basico de HTML-CSS;<br/>
        * Conhecimento avançado da língua inglesa;<br/>
        * Manejamento de projetos em grupo;
      </p>
      <hr/>
      <h4>Referencias:</h4>
      <a href="https://www.linkedin.com/in/lucas-mourato-5b6a062b5/" target="_blank">
        LinkedIn
        <br/>
      </a>
      <Link href = "/jogodaforca" target="_blank">Jogo da forca</Link>
    </div>
  );
}