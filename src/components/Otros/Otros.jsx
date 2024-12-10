import './Otros.css'
export default function Otros (){
    return (
                <div className="Otros">
                    <div className="content">
                        <h2>Levain Cookie Club</h2>
                        <p>
                            ¡Únete al club para recibir galletas entregadas a tu puerta mensualmente, con envío gratis y un 10% de descuento!
                        </p>
                    </div>
                    <div className="buttons">


                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-6 px-20 border border-blue-500 hover:border-transparent rounded">
                            UNIRSE AL CLUB</button>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-6 px-20 border border-blue-500 hover:border-transparent rounded"
                        >CUPON DE DESCUENTO</button>
                    </div>
                </div>
    )
}
