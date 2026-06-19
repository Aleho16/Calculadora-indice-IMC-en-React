export const calcularIMC = (peso, altura) => {
    if (!peso || !altura || altura <= 0)return 0
    
    const imc = peso / (altura * altura)
    return Number(imc.toFixed(2))
}

export const obtenerDatosIMC = (imc) => {
    if (imc === 0)return { categoria: 'ingresa tus datos', color: '#ffffff'}

    if (imc < 11.9) {
        return{ categoria: 'desnutriciooon🥀', color: '#f4c193'}
    }
    if (imc >= 11.9 && imc < 18.5) {
        return{ categoria: 'bajo peso', color: '#b3e5fc'}
    }
    if (imc >= 18.5 && imc < 24.9){
        return{ categoria: 'peso normal', color: '#c8e6c9'}
    }
    if (imc >= 25 && imc < 30.9){
        return{categoria: 'exceso de peso', color: '#f4e971'}
    }
    if (imc >= 30.9 && imc < 35.9){
        return{categoria: 'obesidad I', color: '#ebb917'}
    }
    if (imc >= 35.9 && imc < 40.9){
        return{categoria: 'obesidad II', color: '#fa8b30'}
    }
    if (imc >= 40.9 && imc < 59.9){
        return{categoria: 'obesidad III', color: '#d41c1c'}
    }
    if (imc > 59.9){
        return{categoria: 'Muertoooooo ☠️', color: '#361674'}
    }
}