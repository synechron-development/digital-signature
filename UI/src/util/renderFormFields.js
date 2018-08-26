import React from 'react';
export function renderInput(field) {

  return (
    <div className="uk-margin">

      {(field.label) ? <label className="uk-form-label">{field.label}</label> : ''}
      <div className="uk-form-controls">
        <div className="uk-inline">
          {(field.icon) ? <span className="uk-form-icon" uk-icon={`icon: ${field.icon}`}></span> : ''}
          <input {...field.input} {...field} className={(field.meta.touched && field.meta.error) ? `${field.className} uk-form-danger uk-input` : ` uk-input`} />
        </div>
        {/* {field.meta.touched &&
            ((field.meta.error && <span>{field.meta.error}</span>) ||
              (field.meta.warning && <span>{field.meta.warning}</span>))} */}
      </div>
    </div>
  );
}



export function renderTextArea(field) {

  return (
    <div className="uk-margin">

      {(field.label) ? <label className="uk-form-label">{field.label}</label> : ''}
      <div className="uk-form-controls">
        <div className="uk-inline">
          {(field.icon) ? <span className="uk-form-icon" uk-icon={`icon: ${field.icon}`}></span> : ''}
          <textarea {...field.input} {...field} className={(field.meta.touched && field.meta.error) ? `${field.className} uk-form-danger uk-textarea` : `uk-textarea`} >
          </textarea>
        </div>
        </div>
    </div>
  );
}

export function renderCheckBox(field) {
  
  return (
    
    <div className="uk-form-controls uk-form-controls-text">
      <label className="switch"> 
      <input checked={field.input.value} type="checkbox" {...field.input} {...field}  />
        <span className="slider round"></span>
      </label>
    </div>

  );
}



export function renderToggleTile(field) {
  
  return (
      <label className="toggle-tile"> 
      <input checked={field.input.value} type="checkbox" {...field.input} {...field}  />
        <span className="backdrop"></span>
      </label>
  );
}