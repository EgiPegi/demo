import React from 'react'
import { useHistory } from 'react-router-dom'
import { contoh1 } from '../../../assets'
import './style.css'

const Category = () => {
    let history = useHistory();
    return (
        <div className="category">
            <div className="wrap-category">
                <div style={{'backgroundImage': `url(${contoh1})`}} className="list-category" 
                onClick={()=> 
                history.push('/produk/kategori')
                }>
                    <div className="name-category">
                    LENGAN PANJANG
                    </div>
                </div>
                <div style={{'backgroundImage': `url(${contoh1})`}} className="list-category" 
                onClick={()=> 
                    history.push('/produk/kategori')
                    }>
                    <div className="name-category">
                    LENGAN PENDEK
                    </div>
                </div>
                <div style={{'backgroundImage': `url(${contoh1})`}} className="list-category"
                onClick={()=> 
                    history.push('/produk/kategori')
                    }>
                    <div className="name-category">
                    POLO
                    </div>
                </div>
                <div style={{'backgroundImage': `url(${contoh1})`}} className="list-category"
                onClick={()=> 
                    history.push('/produk/kategori')
                    }>
                    <div className="name-category">
                    HOODIE
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Category
