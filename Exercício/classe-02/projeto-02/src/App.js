import './App.css';
import picture from './assets/gabriela.jpg';
import btnPrev from './assets/icon-prev.svg';
import btnNext from './assets/icon-next.svg';

function App() {
  return (
    <div class="content-wrapper">
      <div class="text-wrapper">
        <p class="review-text">“Estive interessada em código por um tempo mas não tomava uma atitude, até agora. Não
          consigo recomendar esse curso o suficiente. Estou no trabalho dos meu sonhos e vejo um futuro
          brilhante!”</p>
        <div class="author__content-wrapper">
          <div class="author__name">Gabriela da Silva</div>
          <div class="author__title">Desenvolvedora Fullstack</div>
        </div>
      </div>

      <div class="carousel">
        <div class="carousel__img-wrapper">
          <img src={picture} alt="bootcamp graduate" class="carousel__img" />
        </div>
        <div class="carousel__btn-wrapper">
          <button id="btn-prev" class="btn btn--previous" onclick="pessoaAnterior()"><img
            src={btnPrev} alt="previous button" /></button>
          <button id="btn-next" class="btn btn--next" onclick="proximaPessoa()"><img src={btnNext}
            alt="next button" /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
