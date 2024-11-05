import './MainContent.css';

 export default function MainContent() {
     return (
         <div className="container container-features">
             <div className="card-feature">
                 <i className="fa-solid fa-plane"></i>
                 <div className="feature-content">
                     <span>Envios gratuitos en Chile</span>
                     <p> En pedido superior a $50.000</p>
                 </div>
             </div>
             <div className="card-feature">
                 <i className="fa-solid fa-wallet"></i>
                 <div className="feature-content">
                     <span>Contrareembolzo</span>
                     <p> 100% garantia de devolución de dinero</p>
                 </div>
             </div>
             <div className="card-feature">
                 <i className="fa-solid fa-gift"></i>
                 <div className="feature-content">
                     <span>Tarjeta de regalo especial</span>
                     <p> Ofrece bonos especiales con regalos</p>
                 </div>
             </div>
             <div className="card-feature">
                 <i className="fa-solid fa-headset"></i>
                 <div className="feature-content">
                     <span>Servicio añ Cliente</span>
                     <p> Llamanos 24/7 al 123-456-7890</p>
                 </div>
             </div>
         </div>


     )


 }
