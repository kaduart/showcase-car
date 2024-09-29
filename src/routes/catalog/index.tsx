import './styles.css';
import CarCard from "../../components/cars/car-card";
import Header from "../../components/header";
import Footer from '../../components/footer';
import Search from '../../components/seach';
import CommentCard from '../../components/comments/comments-card';

export default function Catalog() {
    return (
        <>
            <Header />
            <main>
                <section id="shw-section">
                    <div className="shw-catalog-title">
                        <h1>Nosso catálogo</h1>
                    </div>

                    <div className="shw-search-container">
                        <Search />
                    </div>

                    <div className="shw-catalog">
                        <CarCard />
                        <CarCard />
                        <CarCard />
                    </div>

                    <div className="shw-catalog-center">
                        <div className='shw-comments-container'>
                            <h1 className='shw-catalog-title'>O que estão dizendo</h1>
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}