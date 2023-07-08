export const deleteScript = (val: string, setErrText: Function) => {
    if(val.toLowerCase().includes('script>')) {
        setErrText(`Текст содержит тег script. Пожалуйста, удалите его.`)
    } else {
        setErrText(``)
    }
}

export const validateInput = (value: string, setErrorText: Function) => {
    
    if(value === '' || value === ' ') {
        setErrorText(`Это поле обязательно`);
        return;
    }

    deleteScript(value, setErrorText);
}

export const validateFile = (isFileSets: boolean, setIsError: Function, setErrorText: Function) => {
    if(isFileSets === false) {
        setIsError(true);
        setErrorText(`Please add a file`);
        return;
    }
}

export const validateFileType = (type: string, setIsError: Function, setErrorText: Function) => {
    if(!['application/pdf', 'image/jpeg', 'image/png'].includes(type)) {
        setIsError(true);
        setErrorText(`Please add a  pdf, jpeg, or png`);
        return;
    }
}

export const validateFileTypeFull = (fileArr: Array<any>, setIsError: Function, setErrorText: Function) => {
    for(let i = 0; i <  fileArr.length; i ++ ) {
        if(!['application/pdf', 'image/jpeg', 'image/png', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'].includes(fileArr[i].type)) {
            setIsError(true);
            setErrorText(`Please add a  pdf, jpeg, docx, or png`);
            return;
        } 
    }
}

export const validateFileSize = (fileArr: Array<any>, setIsError: Function, setErrorText: Function) => {
    let max_attachments_size_allowed = 10 * 1024 * 1024; 
    for(let i = 0; i <  fileArr.length; i ++ ) {
        if(fileArr[i].size > max_attachments_size_allowed) {
            setIsError(true);
            setErrorText(`Your file is too large`);
            return;
        }
    }
}