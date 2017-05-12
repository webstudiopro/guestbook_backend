/**
 * Created by webstudiopro on 3/4/17.
 */
import React from 'react';
import {Glyphicon} from 'react-bootstrap';


class Product extends React.Component {
    render(){
        let newPrice = (props) =>{
            if(props.product.new_price > 0){
                let unit = '';
                if(props.product.unit.length > 0){
                    unit = '/'+props.product.unit;
                }
                if(props.product.promotion){
                    return <span className="promo-price">{accounting.formatMoney(props.product.new_price, "€", 2, ".", ",")}{unit}</span>
                } else {
                    return <span className="normal-price">{accounting.formatMoney(props.product.new_price, "€", 2, ".", ",")}{unit}</span>
                }
            }
        };
        let oldPrice = (props) =>{
            if(props.product.old_price > 0){
                return <span className="old-price">{accounting.formatMoney(this.props.product.old_price, "€", 2, ".", ",")}</span>
            }
        };
        return(
          <div className="col-sm-4 col-md-2">
            <div className="thumbnail">
              <img src={this.props.product.image} alt="afbeelding" />
              <div className="caption">
                <h3>{this.props.product.title}</h3>
                <p className="product-price">
                    {oldPrice(this.props)}
                    {newPrice(this.props)}
                </p>
                <p><a href="#" className="btn btn-primary" role="button">Bestellen</a>
                    <a href="#" className="btn btn-default" role="button">Meer info</a>
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default Product;