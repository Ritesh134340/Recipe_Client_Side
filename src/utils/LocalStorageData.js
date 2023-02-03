export const SaveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const GetFromLocalStorage = (key, defaultValue = null) => {
    try{
        const data = localStorage.getItem(key);
        if (data){
            return JSON.parse(data);
        } 
        else{
            return defaultValue;   
        } 
    }
    catch(err){
        console.log(err)
    }
  
};
