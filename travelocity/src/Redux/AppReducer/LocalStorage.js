export const SaveData = (key, value) =>{
    localStorage.setItem(key, JSON.stringify(value));
}

export const LoadData =(key)=>{
    let data  = localStorage.getItem(key);
    data = JSON.parse(data)
    return data
}