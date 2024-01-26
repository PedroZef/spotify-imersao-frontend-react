import './Footer.Module.css';

const Footer = () => {
    return (
        <footer className="disclaimer-premium">
            <div className="text">
                <p className="disclaimer-premium__title">Testar o Premium de graça</p>
                <p className="disclaimer-premium__subtitle">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns
                    anúncios. Não precisa de cartão de crédito.
                </p>
                <a href='https://github.com/spotify-imersao-frontend-react'>Desenvolvido por Pedro Zeferino </a>
            </div>
            <div className="button">
                <button type="button">Inscreva-se grátis</button>
            </div>
            
        </footer>
    )
};

export default Footer;
