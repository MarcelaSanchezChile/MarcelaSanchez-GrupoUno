import './Contacto.css'
export default function Contacto (){
    return(
        <div className="primerdiv">
            <h1>Ponerse en contacto</h1>

            <p >¿Tienes algún dilema relacionado con galletas o simplemente quieres compartir tu amor por ellas?  Envíanos
                un mensaje usando este formulario, y un miembro del equipo de Levain te responderá lo más pronto
                posible. También puedes enviarnos un mensaje de texto al 877-932-2161.
               Nos esforzamos por responder rápidamente, en un máximo de 48 horas. Estamos disponibles todos los días
                de 9 a.m. a 5 p.m. (hora del Este de EE. UU.).

                Si tienes una consulta de prensa o medios, por favor envía un correo a media@levainbakery.com.

                ¿Necesitas hablar con alguien en una panadería específica? Consulta todas las ubicaciones para obtener
                información de contacto.

                *Al ingresar tu número de teléfono, aceptas recibir soporte por teléfono o SMS si es necesario. </p>

                <form action="/enviar" method="POST" className="contact-form">
                    <div className="segundodiv">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre <span className="required">*</span></label>
                            <input type="text" id="nombre" name="nombre" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefono">Número de teléfono</label>
                            <input type="text" id="telefono" name="telefono"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="correo">Correo electrónico <span className="required">*</span></label>
                        <input type="email" id="correo" name="correo" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje <span className="required">*</span></label>
                        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">ENVIAR</button>
                </form>
        </div>


)
}