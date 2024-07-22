import cardapio from 'data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function Inicio() {
  let pratosRecomendado = [...cardapio];
  pratosRecomendado = pratosRecomendado.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendado.map(prato => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}