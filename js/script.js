<<<<<<< HEAD
const vm = new Vue({
    el: '#app',
    data: {
        inputTipoPao: '',
        inputSalada: [],
        inputMolho: [],
        inputHamburguer: '',
    },
    computed: {
        pao() {
            switch (this.inputTipoPao) {
                case 'gergelim':
                    return [
                        "imagens/pao_gergelim_superior.png",
                        "imagens/pao_gergelim_inferior.png"
                    ]
                case 'australiano':
                    return [
                        "imagens/pao_australiano_superior.png",
                        "imagens/pao_australiano_inferior.png"
                    ]
                default:
                    return [
                        "imagens/padrao/pao_superior.png",
                        "imagens/padrao/pao_inferior.png"
                    ]
            }
        }
    }
=======
const vm = new Vue({
    el: '#app',
    data: {
        inputTipoPao: '',
        inputSalada: [],
        inputMolho: [],
        inputHamburguer: '',
    },
    computed: {
        pao() {
            switch (this.inputTipoPao) {
                case 'gergelim':
                    return [
                        "imagens/pao_gergelim_superior.png",
                        "imagens/pao_gergelim_inferior.png"
                    ]
                case 'australiano':
                    return [
                        "imagens/pao_australiano_superior.png",
                        "imagens/pao_australiano_inferior.png"
                    ]
                default:
                    return [
                        "imagens/padrao/pao_superior.png",
                        "imagens/padrao/pao_inferior.png"
                    ]
            }
        }
    }
>>>>>>> de6717774c8c7b85df033d9fbacec9e4702a5492
})