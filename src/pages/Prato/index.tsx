import classNames from 'classnames';
import styles from './Prato.module.scss';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';

export default function Prato() {

  const { id } = useParams();
  const prato = cardapio.find(prato => prato.id === Number(id));
  const navigate = useNavigate();

  if(!prato){
    return '';
  }

  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <div className={styles.tags}>
            <div className= {classNames({
              [styles.tags__tipo]: true,
              [styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]:true
            })}>
              {prato.category.label}
            </div>
            <div className={styles.tags__porcao}>
              {prato.size}g
            </div>
            <div className={styles.tags__qtdPessoas}>
              Serve {prato.serving} pessoa{prato.serving === 1 ? '': 's'}.
            </div>
            <div className={styles.tag__valor}>
              R$ {prato.price.toFixed(2)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}