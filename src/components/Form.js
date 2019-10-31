import React from 'react';
import useForm from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
    <div className="col">
    <label>Firstname</label>
      <input className="form-control" name="firstname" ref={register({ required: true })} /> {/* register an input */}
      <b style={{color: 'red'}}> {errors.firstname && 'First name is required.'}</b>
</div>
<div className="col">
      <label>Lastname</label>
      <input className="form-control" name="lastname" ref={register({ required: true })} />
      <b style={{color: 'red'}}> {errors.lastname && 'Last name is required.'}</b>
</div></div>
      <div className="row">
    <div className="col-4">
      <label>Age</label>
      <input className="form-control" name="age" ref={register({ pattern: /\d+/ })} />
      <b style={{color: 'red'}}>  {errors.age && 'Please enter number for age.'}</b>
      </div><div className="col">
      <label>Email</label>  
      <input
          type="text"
          name="email"
          className="form-control"
          ref={register({
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
       <b style={{color: 'red'}}>  {errors.email && 'Email valid is required.'} </b>  
        </div></div>
        <div className="row">
    <div className="col">
        <label>Phone</label>
        <input maxLength="8"
          type="tel"
          name="phone"
          className="form-control"
          ref={register({
            required: true,
            pattern: /^\d{8}$/,
          })}
        /><b style={{color: 'red'}}>{errors.phone && 'phone valid is required.'}   </b>  
        
</div><div className="col">
        <label>Uruguayan cell phone</label>
        <input maxLength="9"
          type="tel"
          name="cellphone"
          className="form-control"
          ref={register({
            required: true,
            pattern: /^[09]{2}[0-9]{7}$/
          })}
        /><b style={{color: 'red'}}>{errors.cellphone && 'Cellphone valid is required.'}  </b> 
        <br></br> <br></br>
        </div> </div>
    <div className="text-center">
      <input className="btn btn-success btn-lg" type="submit" />
      </div>
    </form>
  );
}