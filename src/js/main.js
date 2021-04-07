class ApiTest {

    BASE_API_URL = `http://circuslabs.net:3000/data`

    constructor() {
        this.messageEl = document.querySelector(`.error`)
        this.dataEl = document.querySelector(`.data-field__input`)
        this.setupListeners()
    }

    showMessage = (message) => {
        this.messageEl.textContent = message
    }

    setupListeners = () => {
        var loadBUTTON = document.querySelector(`.button_load`)
        var saveBUTTON = document.querySelector(`.button_save`)
        loadBUTTON.addEventListener(`click`, this.getData)
        saveBUTTON.addEventListener(`click`, this.postData)
    }

    postData = () => {
        let key = document.querySelector(`[name="key"]`).value
        let inputData = this.dataEl.value
        axios.post(`${this.BASE_API_URL}/${key}`, {
            type: 'string',
            action: '=',
            value: inputData
        }).then(this.processResponse).catch(this.processError)
    }

    getData = () => {
        this.showMessage(`Data loaded!`)

        let key = document.querySelector(`[name="key"]`).value
        axios.get(`${this.BASE_API_URL}/${key}`).then(this.processResponse).catch(this.processError)
    }

    processResponse = (response) => {
        this.showMessage(response.data.message)
        console.log(response)
        if(response.data.message.indexOf(`Found`) != -1){
            this.dataEl.value = response.data.data.value
        }
    }

    processError = (error) => {
        console.log(`got an error`, error)

        this.showMessage(`Error! ${error.message}`)
    }
}

new ApiTest()