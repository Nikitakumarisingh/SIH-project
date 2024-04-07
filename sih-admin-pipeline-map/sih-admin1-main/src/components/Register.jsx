import React from 'react';

const RegistrationForm = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: '20px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const formContainerStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const formStyle = {
    maxwidth: '400px',
    margin: '0 auto',
  };

  const labelInputStyle = {
    display: 'block',
    marginBottom: '15px',
  };

  const formGroupStyle = {
    marginBottom: '25px',
    display: 'flex',
    alignItems: 'center',
  };

  const formGroupLabelStyle = {
    flex: '1',
    marginRight: '20px',
    color: '#000',
    fontSize: '16px',
  };

  const inputStyle = {
    flex: '2',
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #aaa',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const submitButtonStyle = {
    padding: '12px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  };

  const termsTextStyle = {
    fontSize: '14px',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle} className="form-container">
        <h1 className="form-title">User Registration</h1>
        <form style={formStyle} id="registerForm" action="/register" method="POST">
          <div style={formGroupStyle}>
            <label htmlFor="regUsername" style={formGroupLabelStyle}>Username:</label>
            <input type="text" id="regUsername" name="firstname" style={inputStyle} required />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="regEmail" style={formGroupLabelStyle}>Email:</label>
            <input type="email" id="regEmail" name="email" style={inputStyle} required />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="regPassword" style={formGroupLabelStyle}>Password:</label>
            <input type="password" id="regPassword" name="password" style={inputStyle} required />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="confirmPassword" style={formGroupLabelStyle}>Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmpassword" style={inputStyle} required />
          </div>

          <div style={formGroupStyle}>
            <input type="checkbox" id="agreeTerms" style={{ marginRight: '10px' }} required />
            <label htmlFor="agreeTerms" style={termsTextStyle}>I agree to the terms and conditions</label>
          </div>

          <input type="submit" value="Register" style={submitButtonStyle} />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;


// export default UserRegistration;
