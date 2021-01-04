import React from 'react'
import { fbIcn, igIcn, inIcn, teleIcn } from '../../../assets'
import './style.css'

const Icon = ({img}) => {
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="linefooter">
            <div className="social-wrapper">
                    <Icon img={fbIcn} />
                    <Icon img={igIcn} />
                    <Icon img={inIcn} />
                    <Icon img={teleIcn} />
                </div>
            </div>
            <div className="foot">
                <div className="ft-gr">
                <p className="ft-title">Support</p>
                    <a href="#" className="ft-it">Cara Berbelanja</a><br/>
                    <a href="#" className="ft-it">Hubungi Kami</a><br/>
                    <a href="#" className="ft-it">Promo dan Vooucher</a><br/>
                    <a href="#" className="ft-it">Pengiriman</a><br/>
                </div>
                <div className="ft-gr">
                <p className="ft-title">Support</p>
                    <a href="#" className="ft-it">Cara Berbelanja</a><br/>
                    <a href="#" className="ft-it">Hubungi Kami</a><br/>
                    <a href="#" className="ft-it">Promo dan Vooucher</a><br/>
                    <a href="#" className="ft-it">Pengiriman</a><br/>
                </div>
                <div className="ft-gr">
                    <p className="ft-title">Support</p>
                    <a href="#" className="ft-it">Cara Berbelanja</a><br/>
                    <a href="#" className="ft-it">Hubungi Kami</a><br/>
                    <a href="#" className="ft-it">Promo dan Vooucher</a><br/>
                    <a href="#" className="ft-it">Pengiriman</a><br/>
                </div>
                <div className="ft-gr">
                <p className="ft-title">Support</p>
                    <a href="#" className="ft-it">Cara Berbelanja</a><br/>
                    <a href="#" className="ft-it">Hubungi Kami</a><br/>
                    <a href="#" className="ft-it">Promo dan Vooucher</a><br/>
                    <a href="#" className="ft-it">Pengiriman</a><br/>
                </div>
            </div>
        </div>
    )
}

export default Footer
