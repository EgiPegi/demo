import React from 'react'
import { Preview } from '../../../components'
import '../style.css'

const Detail = () => {
    return (
        <div className="produk">
            <div className="wrap-produk">
                <div className="info">
                    <Preview className="img-sl" />
                </div>
                <div className="info">
                    <div className="title">
                        Nama Produk
                    </div>
                    <div className="price">
                        Rp 25.000,-
                    </div>
                    <div >
                        <button className="btn-cart">Tambah ke keranjang</button>
                    </div>
                    <div className="detail">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius. Dictum at tempor commodo ullamcorper. Non pulvinar neque laoreet suspendisse interdum. Ipsum suspendisse ultrices gravida dictum fusce ut. Orci dapibus ultrices in iaculis nunc sed augue lacus. At auctor urna nunc id. Nisi est sit amet facilisis magna. Nunc aliquet bibendum enim facilisis gravida neque convallis. Tellus elementum sagittis vitae et. Risus ultricies tristique nulla aliquet enim tortor at. Orci nulla pellentesque dignissim enim sit amet venenatis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Massa enim nec dui nunc mattis enim ut tellus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.</p>
                        <p>Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Sed enim ut sem viverra aliquet eget sit amet tellus. Commodo nulla facilisi nullam vehicula ipsum a arcu. Ac tortor dignissim convallis aenean et. Semper auctor neque vitae tempus. Sit amet venenatis urna cursus eget nunc. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Tortor dignissim convallis aenean et. Enim sit amet venenatis urna cursus. Sapien eget mi proin sed libero enim. Turpis massa sed elementum tempus. Tristique risus nec feugiat in fermentum. Dis parturient montes nascetur ridiculus mus mauris. Enim praesent elementum facilisis leo.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Detail
