import styles from './Item.module.scss'; 
import cardapio from 'data/cardapio.json';
import classNames from 'classnames';
import { Prato } from 'types/pratos';
import Tags from 'components/Tags';
import { useNavigate } from 'react-router-dom';

type Props = Prato;

export default function Item(props: Props) {
  const { title, description, category, size, serving, price, photo,id } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <Tags {...props}/>
      </div>
    </div>
  );
}