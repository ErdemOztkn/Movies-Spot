import React from 'react'

export default function Footer() {
    return (
        <div className="footerContainer">
            <footer>
            <div className="left">
                <img src="/images/tmdb.png" alt="" />
                <div className="text">
                    <h4>Veriler, TMDB API aracılığıyla sağlanmaktadır.</h4>
                    <p>Bu sitedeki içerikler, TMDB API üzerinden The Movie Database'den elde edilmiştir. Resmi bir bağlantısı veya TMDB ile işbirliği bulunmamaktadır.</p>
                </div>

            </div>
            <div className="right">
                <div className="footerLinks">
                    <h3>İletişim</h3>
                    <ul>
                        <li>example@gmail.com</li>
                        <li>İletişim Formu</li>
                    </ul>
                </div>

                <div className="footerLinks">
                    <h3>Yardım</h3>
                    <ul>
                        <li>SSS</li>
                        <li>Hakkımızda</li>
                    </ul>
                </div>

                <div className="footerLinks">
                    <h3>Yasal</h3>
                    <ul>
                        <li>Gizlilik Politikası</li>
                        <li>Kullanım Koşullları</li>
                    </ul>
                </div>
            </div>
        </footer>
        </div>
    )
}
