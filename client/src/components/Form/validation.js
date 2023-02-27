const validation = (input) => {
    let errors = {};
    let duration = Number(input.duration);
  
    
    if (!input.name) errors.name = "Name is required";
    else if (/[^A-Za-z0-9 ]+/g.test(input.name)) 
    errors.name = " Name cannot have special characters or tildes";

    else if (input.name.length < 3) 
      errors.name = "Must have more than three letters";
    
    else if (parseInt(input.name.length) >= 25)  
      errors.name = "Must contain less than 25 characters";


    if (!input.difficulty) errors.difficulty =  "Difficulty required";
   
    if (!input.duration) errors.duration = "Duration required";
    else if (duration <= 0 || duration > 24) errors.duration = "Must be between 1 and 24 hours";
  
    if (!input.season) errors.season = "Season required";
  
    if (!input.countries ) errors.countries = "Country or countries required";
  
    return errors;
  }

export default validation;
