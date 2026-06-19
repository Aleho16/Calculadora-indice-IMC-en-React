import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { calcularIMC, obtenerDatosIMC } from './imcLogic';

// Esquema de validación con Zod
const imcSchema = z.object({
  peso: z.number({ invalid_type_error: "Ingresa un número válido" })
         .positive("El peso debe ser mayor a 0"),
  altura: z.number({ invalid_type_error: "Ingresa un número válido" })
           .positive("La altura debe ser mayor a 0")
});

export default function ImcForm({ onColorChange }) {
  const { register, control, formState: { errors } } = useForm({
    resolver: zodResolver(imcSchema),
    defaultValues: { peso: '', altura: '' },
    mode: "onChange"
  });

  const pesoActual = useWatch({ control, name: 'peso' });
  const alturaActual = useWatch({ control, name: 'altura' });

  const imc = calcularIMC(pesoActual, alturaActual);
  const { categoria, color } = obtenerDatosIMC(imc);

  useEffect(() => {
    if (onColorChange) {
      onColorChange(color);
    }
  }, [color, onColorChange]);

  return (
    <div className="card shadow-lg p-4 mx-auto mt-4" style={{ maxWidth: '450px', borderRadius: '15px' }}>
      <form>
        <div className="mb-4">
          <label htmlFor="peso" className="form-label fw-bold">Peso (kg):</label>
          <input
            type="number"
            step="0.1"
            className={`form-control form-control-lg ${errors.peso ? 'is-invalid' : ''}`}
            placeholder="Ej: 70.5"
            {...register('peso', { valueAsNumber: true })}
          />
          {errors.peso && <div className="invalid-feedback">{errors.peso.message}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="altura" className="form-label fw-bold">Altura (metros):</label>
          <input
            type="number"
            step="0.01"
            className={`form-control form-control-lg ${errors.altura ? 'is-invalid' : ''}`}
            placeholder="Ej: 1.75"
            {...register('altura', { valueAsNumber: true })}
          />
          {errors.altura && <div className="invalid-feedback">{errors.altura.message}</div>}
        </div>
      </form>

      <div className="text-center mt-4 p-3 border rounded bg-light">
        <h3 className="text-secondary">Tu IMC es:</h3>
        <h1 className="display-4 fw-bold mb-0">{imc > 0 ? imc : '--'}</h1>
        <h4 className="mt-2 text-uppercase" style={{ color: imc > 0 ? '#333' : '#999' }}>
          {categoria}
        </h4>
      </div>
    </div>
  );
}