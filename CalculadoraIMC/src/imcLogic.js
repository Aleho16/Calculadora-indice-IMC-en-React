export const calcularIMC = (peso, altura) => {
    if (!peso || !altura || altura <= 0)return 0
    
    const imc = peso / (altura * altura)
    return Number(imc.toFixed(2))
}

export const obtenerDatosIMC = (imc) => {
    if (imc === 0)return { categoria: 'ingresa tus datos', color: 'var(--bg)'}

    if (imc < 18.5) {
        return{ categoria: 'bajo peso', color: '#b3e5fc'}
    }
    if (imc >= 18.5 && imc < 24.9){
        return{ categoria: 'peso normal', color: '#c8e6c9'}
    }
    if (imc >= 25 && imc < 29.9){
        return{categoria: 'sobrepeso', color: '#fff9c4'}
    }
}