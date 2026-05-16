import styles from './BotaoCompartilhar.module.css';
import Share from "../../assets/icon/share.svg?react"


function BotaoCompartilhar() {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Confira este conteúdo!',
        text: 'Veja o que encontrei no site.',
        url: window.location.href,
      });
    } catch (error) {
      console.log('Erro ao compartilhar:', error);
    }
  };


  return (
    <button className={styles.share_button} onClick={handleShare}>
      <Share className={styles.icon_share}/> 
      Compartilhar
    </button>
  );
}

export default BotaoCompartilhar;