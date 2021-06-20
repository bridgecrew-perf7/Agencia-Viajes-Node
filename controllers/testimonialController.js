import { Testimonial } from "../models/Testimoniales.js"
const guardarTestimonial= async (req,rest)=>{
    
    //validar formulario
    const {nombre,correo,mensaje}=req.body
    const testimoniales = await Testimonial.findAll();
    const errores = []


    if(nombre.trim()===''){
        errores.push({mensaje:"el nombre esta vacio"})
    }
    if(correo.trim()===''){
        errores.push({mensaje:"el correo esta vacio"})
    }
    if(mensaje.trim()===''){
        errores.push({mensaje:"el mensaje esta vacio"})
    }
    if (errores.length>0){
        //mostrar vista con errores
        rest.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
        //almacenar en la DB
    }else{
        try {
            console.log(nombre,correo,mensaje)
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            rest.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
  


}

export {guardarTestimonial }