
export default class Service {
    private  _apiBase =  'http://localhost:3001'
   
    private async getResourse(url: string ) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Cloud not fetch ${url}` + `, received ${res.status}`);
        }
        return await res.json();
    }

    public async setResourse(data: string, url: string, resetForm: Function, setMess: Function, setMessType: Function, showLoading: Function, showSucces: Function) {
      console.log(data);
        try {
          let requestOptions = {
            method: 'PUT',
            body: data,
            headers: {
              'Content-Type': 'application/json',
            },
          };
      
          fetch(`${this._apiBase}${url}`, requestOptions)
              .then(response => response.json())
              .then(result => {
                console.log(result);
                if(showLoading) {
                  showLoading(false);
                }
                if(showSucces && setMessType) {
                  showSucces(true);
                  setMessType('succes');
                  window.scrollTo(0, 0);
                }
              })
              .catch(error =>{
                console.log('error', error);
                if(setMessType) {
                  setMessType('error');
                }

                if(setMess) {
                  setMess('Извините, что-то пошло не так. Пожалуйста, попробуйе позже');
                }
              })
              .finally(() => {
                resetForm();
                setTimeout(()=> {
                  if(setMessType) {
                    setMessType('');
                  }
                  if(setMess) {
                    setMess('')
                  }
                }, 10000)
            });
        } catch (e) {
          console.log(e)
        }
      }

    public getPersonals(email: string, password: string) {
        return  this.getResourse(`/data/?email=${email.toLowerCase()}&password=${password}`);
    }
}
