const CareerForm = (data) => {
    return async (dispatch)=> {
        await fetch(
          "http://localhost:3005/career",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          }
        )
        .then(()=>{
            console.log("saved")
            dispatch({
            type:"ADD_FORM",
            status:true
            })
        }).catch((err) => {
            console.log(err.message);
            dispatch({
                type:"FORM_ERROR",
                status:false
            })
        })
      }
    }
    
export default CareerForm;