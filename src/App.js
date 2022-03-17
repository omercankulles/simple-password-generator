import './App.css';
import {useState} from 'react';
import generatePassword from './passwordUtils';

function App() {

  const [passwordLength, setPasswordLength] = useState(6);

  const [password, setPassword] = useState('');

  const handleSliderChange = (es) => {
    
    setPasswordLength(e.target.value);

    const generatedPassword = generatePassword(e.target.value);

    setPassword(generatedPassword);
  }

  return (
    <div className='container'>
      <div className='row'>  
        <div className='col-12'>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            
            <div className='card mt-3'>
              <div className='card-body'>
                <div className='card-title text-center'>
                  <h2 className='text-info'>
                    Simple Password Generator
                  </h2>
                  <p>Create secure passwords with Simple Password Generator</p>
                </div>
                <div className='mt-2'>
                  <label className='form-label' htmlFor='password-length-slider'>
                    Password Length <span className='badge bg-success'>{passwordLength}</span>
                  </label>
                  <input 
                    id='password-length-slider'
                    className='form-range' 
                    type="range" 
                    min={6} 
                    max={40}
                    step={1}
                    value={passwordLength}
                    onChange={(e) => handleSliderChange(e)}
                  />
                </div>
                <div className='mt-2'>
                  <input 
                    className='form-control text-center' 
                    type="text" 
                    style={{cursor:'pointer'}}
                    value={password}
                  />
                  <button className='btn btn-info mt-3'>Save</button>
                  <button className='btn btn-outline-info mt-3 float-end'>Reset Saved Password</button>
                </div>
              </div>
            </div>
        
            <div className='card mt-3'>
              <div className='card-body'>
                <div className='card-header text-center'>
                  <h2 className='text-info'>Recent Generated Passwords</h2>
                </div>
                <ul className='list-group list-group-flush text-center'>
                  <li className='list-group-item'><span className='fst-italic float-start'>1</span>
                  <div className='badge bg-success' style={{cursor:'pointer'}}>1</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
