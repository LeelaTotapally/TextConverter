function Alert(props) {
  return (
   <>
   <div className={`alert alert-${props.alertType} alert-dismissible fade show`} role="alert">
<strong>{props.alertMesssage}</strong>  

</div>
</>
  );
}

export default Alert;

  