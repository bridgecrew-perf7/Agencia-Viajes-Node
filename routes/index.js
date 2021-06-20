import  express  from "express";
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaViajesDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";
const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros',paginaNosotros)
router.get('/viajes',paginaViajes)

//:viaje comodin

router.get('/viajes/:slug',paginaViajesDetalleViaje)
router.get('/testimoniales',paginaTestimoniales)
router.post('/testimoniales',guardarTestimonial)


export default router;