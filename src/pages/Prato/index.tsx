import styles from './Prato.module.scss';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import Tags from 'components/Tags';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {

  const { id } = useParams();
  const prato = cardapio.find(prato => prato.id === Number(id));
  const navigate = useNavigate();

  if(!prato){
    return <NotFound/>;
  }

  return (
    <PaginaPadrao>
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
          <Tags {...prato}/>
        </div>
      </section>
    </PaginaPadrao>
  );
}