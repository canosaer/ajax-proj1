class ApiTest{BASE_API_URL="http://circuslabs.net:3000/data";constructor(){this.messageEl=document.querySelector(".error"),this.dataEl=document.querySelector(".data-field__input"),this.setupListeners()}showMessage=e=>{this.messageEl.textContent=e};setupListeners=()=>{var e=document.querySelector(".button_load"),t=document.querySelector(".button_save");e.addEventListener("click",this.getData),t.addEventListener("click",this.postData)};postData=()=>{let e=document.querySelector('[name="key"]').value,t=this.dataEl.value;axios.post(`${this.BASE_API_URL}/${e}`,{type:"string",action:"=",value:t}).then(this.processResponse).catch(this.processError)};getData=()=>{this.showMessage("Data loaded!");let e=document.querySelector('[name="key"]').value;axios.get(`${this.BASE_API_URL}/${e}`).then(this.processResponse).catch(this.processError)};processResponse=e=>{this.showMessage(e.data.message),console.log(e),-1!=e.data.message.indexOf("Found")&&(this.dataEl.value=e.data.data.value)};processError=e=>{console.log("got an error",e),this.showMessage(`Error! ${e.message}`)}}new ApiTest;