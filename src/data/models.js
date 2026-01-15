import { Package, Clock, Rocket, Check, X, AlertTriangle, Star } from 'lucide-react'

export const modelsData = [
    {
        id: 'proyecto-cerrado',
        title: 'Proyecto Cerrado',
        subtitle: 'Seguridad a corto plazo, rigidez a largo plazo',
        concept: 'Pago único por entrega',
        icon: Package,
        vibe: 'Estático • Rígido',
        isRecommended: false,
        description: 'Os doy un precio fijo por lo que acordemos. Pago, entrega, y listo. Simple.',
        shortDescription: 'Ideal si teneis claro lo que queréis y no va a cambiar.',
        riskNote: 'Ojo: Si después queréis cambiar algo, hay que presupuestarlo aparte.',
        pros: [
            'Sabeis exactamente cuánto os va a costar',
            'Sin cuotas mensuales',
            'Entrega clara y definida'
        ],
        cons: [
            'Cada mejora futura se cobra aparte',
            'Si la tecnología avanza, vuestra web se queda atrás',
            'Cualquier cambio requiere nuevo presupuesto'
        ],
        color: 'from-slate-600 to-slate-800',
        borderColor: 'border-slate-600/30',
        iconColor: 'text-slate-400'
    },
    {
        id: 'bolsa-horas',
        title: 'Bolsa de Horas',
        subtitle: 'Flexibilidad total, presupuesto variable',
        concept: 'Pago por uso',
        icon: Clock,
        vibe: 'Variable • Flexible',
        isRecommended: false,
        description: 'Me contratis por horas. Trabajo lo que necesiteis hasta que se acaben.',
        shortDescription: 'Solo pagais las horas que useis.',
        riskNote: 'Ojo: Es difícil saber cuánto costará el proyecto final.',
        pros: [
            'Solo pagais por lo que trabajo',
            'Máxima flexibilidad para cambiar de idea',
            'Sin compromiso a largo plazo'
        ],
        cons: [
            'Difícil prever el coste total',
            'Tendréis que ir aprobando horas',
            'Puede haber sorpresas en la factura'
        ],
        color: 'from-amber-600/80 to-orange-700/80',
        borderColor: 'border-amber-500/30',
        iconColor: 'text-amber-400'
    },
    {
        id: 'partner-tecnologico',
        title: 'Partner Tecnológico',
        subtitle: 'Como tener vuestro propio departamento técnico',
        concept: 'Implantación + Cuota Mensual',
        icon: Rocket,
        vibe: 'Evolución • Tranquilidad',
        isRecommended: true,
        description: 'Empezamos con una inversión inicial para crear la base, y luego una cuota mensual que incluye todo: hosting, copias de seguridad, mantenimiento y horas para seguir mejorando la herramienta.',
        shortDescription: 'La opción que te recomiendo. Tu negocio crece, y la web crece contigo.',
        riskNote: null,
        killerArgument: 'Vuestra herramienta mejora cada mes mientras tú te centras en lo tuyo.',
        pros: [
            'Inversión inicial más baja',
            'Sin facturas sorpresa',
            'Hosting y copias de seguridad incluidas',
            'Corrijo errores sin cobrarte extra',
            'Horas mensuales para nuevas funciones',
            'Atención prioritaria'
        ],
        cons: [
            'Cuota mensual (pero todo incluido)'
        ],
        color: 'from-indigo-500 via-purple-500 to-pink-500',
        borderColor: 'border-indigo-400/50',
        iconColor: 'text-indigo-300'
    }
]
