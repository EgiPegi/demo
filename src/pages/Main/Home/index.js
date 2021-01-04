import React from 'react'
import { useHistory } from 'react-router-dom'
import { contoh1, contoh2, contoh3, contoh4 } from '../../../assets'
import './style.css'

const Home = () => {
    let history = useHistory();
    return (
        <div className="home">
        <div className="wrap">                
                <div className="product"
                onClick={()=>{
                    history.push('/produk/detail')
                }}>
                    <img src={contoh1} className="thumb" />
                    <span className="name">Nama Product</span>
                    <hr />
                    <b>Rp 25.000,-</b>
                    <div className="see">LIHAT PRODUK</div>
                </div>
                <div className="product"
                onClick={()=>{
                    history.push('/produk/detail')
                }}>
                    <img src={contoh2} className="thumb" />
                    <span className="name">Nama Product</span>
                    <hr />
                    <b>Rp 25.000,-</b>
                    <div className="see">LIHAT PRODUK</div>

                </div>
                <div className="product"
                onClick={()=>{
                    history.push('/produk/detail')
                }}>
                    <img src={contoh3} className="thumb" />
                    <span className="name">Nama Product</span>
                    <hr />
                    <b>Rp 25.000,-</b>
                    <div className="see">LIHAT PRODUK</div>

                </div>
                <div className="product"
                onClick={()=>{
                    history.push('/produk/detail')
                }}>
                    <img src={contoh4} className="thumb" />
                    <span className="name">Nama Product</span>
                    <hr />
                    <b>Rp 25.000,-</b>
                    <div className="see">LIHAT PRODUK</div>

                </div>
            </div>
        </div>
    )
}

export default Home
