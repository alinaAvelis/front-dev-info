const baseUrl = process.env.REACT_APP_EMAIL_API;
export const postApi = process.env.REACT_APP_RESUME_API;
export const postContactApi = process.env.REACT_APP_SUPPORT_API;

export const sendEmail = async (email, type) => {
  try {
    const res = await fetch(baseUrl+'?email='+email+"&type="+type, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      }
    })
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

export const send = async (data, url, resetForm, setMess,  setAddMess, setMessType, showSucces, showLoading) => {
  try {
    let requestOptions = {
      method: 'POST',
      body: data,
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          if(showLoading) {
            showLoading(false);
          }
          if(showSucces) {
            showSucces(true);
            window.scrollTo(0, 0);
          }
          if(setMessType && setMess) {
            setMessType('success');
            setMess('Your CV has been successfully sent!');
          }
        })
        .catch(error =>{
          console.log('error', error);

          if(setMessType && setMess) {
            setMessType('error');
            setMess('Sorry, there was an error sending. Please try again.');
          }
          
          setAddMess(true);
        })
        .finally(() => {
          resetForm();
          setTimeout(()=> {
            setAddMess(false);
            setMessType('');
            setMess('')
          }, 10000)
      });
  } catch (e) {
    console.log(e)
  }
}


