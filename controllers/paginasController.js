import { Viaje } from "../models/Viaje.js"
import { Testimonial } from "../models/Testimoniales.js"

const paginaInicio = async (req, res)=>{
    //promise para 2 consultas simultaneas
    const promiseDB = []
    
    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Testimonial.findAll({limit:3}))
    //consultar 3 viajes
    
    try {
        const resultado = await Promise.all(promiseDB)
         res.render('inicio',{
        pagina:'Inicio',
        clase: 'home',
        viajes:resultado[0],
        testimoniales:resultado[1]
    })
        
    } catch (error) {
        console.log(error)
    }
   
}


const paginaNosotros = (req, res)=>{
    res.render('nosotros',{
        pagina:'Nosotros'
    })
}

 

const paginaViajes = async (req, res)=>{
    //consultar base de datos
    const viajes = await Viaje.findAll();
    try {
        res.render('viajes',{
        pagina:'Proximos Viajes',
        viajes
    })
    } catch (error) {
        console.log(error)
    }

    
}



const paginaTestimoniales = async (req, res)=>{
    const testimoniales = await Testimonial.findAll();
    
try {
        res.render('testimoniales',{
        pagina:'Testimoniales',
        testimoniales
    })
    
} catch (error) {
    console.log(error)
}

    
}


//muestra un viaje por su slug

 const paginaViajesDetalleViaje= async (req, res)=>{
    const {slug}= req.params
    try {
        const viaje = await Viaje.findOne({where:{slug :slug}});
        res.render('viaje',{
            pagina:'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}
    
export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaViajesDetalleViaje
}

