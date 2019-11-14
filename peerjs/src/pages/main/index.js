import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css'

export default class Main extends Component{
    state = {
        products:[],
        productInfo:{},
        page:1,
    }
    componentDidMount(){
        this.loadProducts();
    }
    
    loadProducts = async (page=1) => {
      const response =  await api.get('/products?page=${page}');
      
      const { docs, ...productInfo } = response.data;

      this.setState({ products:docs,productInfo });
    
    };

    prevPage = () =>{

    };

    nextPage = () =>{
        
        const { page, productInfo } = this.state;
        if ( page === productInfo.pages ) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);

    };

    render(){
        const { products } = this.state;
        return (

            <div className="product-list">
                {products.map(
                    product => (
                        <article key={product._id}>
                            <strong>Título: {product.title}</strong>
                            <p>Descrição: {product.description}</p>
                            <p>Url: {product.url}</p>
                            <a href="#">Acessar detalhes</a>
                            
                        </article>
                    )
                )}
            
                <div className="actions">
                    <button onClick={this.prevPage}> Anterior </button>
                    <button onClick={this.nextPage}> Próxima </button>
                </div>
            </div>
        );
    }
}