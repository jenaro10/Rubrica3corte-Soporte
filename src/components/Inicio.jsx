import React from 'react'

import './style/styleInicio.css'

const Inicio = ({autenticacionUser}) => {
  const fech= new Date().toLocaleDateString()
  return (
    <div className='div-inicio'>
        {
          autenticacionUser !==false?(<div className="alert alert-success text-center mt-3" role="alert">
         Estás dentro de tu cuenta. Dirigite a la pestaña de Admin para realizar una consulta
        </div>):''
        }
        <div className='container border shadow-sm p-3 mb-5 bg-body h-100'>
          <div className='container d-flex gap-3'>
            <h1 className='pt-2 '>Bienvenidos a mi aplicación con React js</h1>
      
          </div>
          <main className='container'>
            <div>
              <p className='mx-1 lead fs-4'>Aplicativo Web de servicio para solicitudes</p>
            </div>
            <section className='mt-4'>
                <h3 className='text-center mb-4'>Realiza tu solicitud</h3>
                <div className='d-flex justify-content-evenly w-100 mt-5'>
                      <div className="card border shadow-sm col-5">
                        <div className="card-header text-center">
                        Solicitud
                        </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Categoria: </strong>Servicio</li>
                            <li className="list-group-item"><strong>Tipo: </strong>Vigilancia</li>
                            <li className="list-group-item"><strong>Lugar: </strong>Parqueadero principal</li>
                            <li className="list-group-item"><strong>Detalles: </strong>Sin vigilantes que cuiden los carros</li>
                            <li className="list-group-item"><strong>Fecha solicitud: </strong>{ fech }</li>
                          </ul>
                      </div>
                      <div className='border shadow-sm con-img col-5 bc-imagen'>
                      </div>
                </div>
            </section>
          </main>
        </div>
    </div>
  )
}

export default Inicio