import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { calcularIMC, obtenerDatosIMC } from './imcLogic';

const imcSchema = z.object({
    peso: z.number({invalid_type_error: "ingresa un numero valido"})
    .positive("el peso debe ser mayor a 0"),
    altura: z.number({ invalid_type_error: "ingresa un numero valido"})
    .positive("la altura debe ser mayor a 0")
})

export default function imcform({ onColorChange }) {
    const { register, control, fromstate: { errors}} = useForm({
        resolver: zodResolver(imcSchema),
        defaultValues: { peso: '', altura: ''},
        mode: "onChange"
    })
}

const pesoActual = useWatch({ control, name: 'peso'})
const alturaActual = useWatch({ control, name: 'altura'})

const imc = calcularIMC(pesoActual, alturaActual)
const { categoria, color } = obtenerDatosIMC(imc)

