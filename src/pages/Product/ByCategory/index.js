import React from 'react'
import { useHistory } from 'react-router-dom'
import { contoh1, contoh2, contoh3, contoh4 } from '../../../assets'
import './style.css'

const ByCategory = () => {
    let history = useHistory();
    return (
        <div className="by">
            <div className="wrap-search">
                <input type="text" className="search" placeholder="Cari..." />
                <button className="btn-search">cari</button>
            </div>
            <div className="wrap-by">                
                <div className="product-by"
                onClick={()=>{
                    history.push('/produk/detail')
                }}>
                    <img src={contoh1} className="thumb-by" />
                    <span className="name">Nama Product</span>
                    <hr />
                    <b>Rp 25.000,-</b>
                    <div className="see">LIHAT PRODUK</div>
                </div>
                <div className="product-by"
                onClick={()=>{
                    history.push('/produk/detail')
                }}>
                    <img src={contoh2} className="thumb-by" />
                    <span className="name">Nama Product</span>
                    <hr />
                    <b>Rp 25.000,-</b>
                    <div className="see">LIHAT PRODUK</div>

                </div>
                <div className="product-by"
                onClick={()=>{
                    history.push('/produk/detail')
                }}>
                    <img src={contoh3} className="thumb-by" />
                    <span className="name">Nama Product</span>
                    <hr />
                    <b>Rp 25.000,-</b>
                    <div className="see">LIHAT PRODUK</div>

                </div>
                <div className="product-by"
                onClick={()=>{
                    history.push('/produk/detail')
                }}>
                    <img src={contoh4} className="thumb-by" />
                    <span className="name">Nama Product</span>
                    <hr />
                    <b>Rp 25.000,-</b>
                    <div className="see">LIHAT PRODUK</div>

                </div>
            </div>
        </div>
    )
}

export default ByCategory
