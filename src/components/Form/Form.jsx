import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import { CustomContext } from '../../hooks/Context';
import './Form.scss';

const Form = () => {
  const [positions, setPositions] = useState('');
  const [postData, setPostData] = useState({});
  const [token, setToken] = useState('');
  const [photo, setPhoto] = useState(null);
  const [posId, setPosId] = useState(0);
  // const [isSuccess, setIsSuccess] = useState(false);

  const { isSuccess, setIsSuccess } = useContext(CustomContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();

    const { name, email, phone } = postData;

    formData.append('position_id', posId);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', photo);

    await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      {
        method: 'POST',
        body: formData,
        headers: { Token: token },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        data.success ? setIsSuccess(true) : setIsSuccess(false);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };

  const handlePhoto = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handlePosId = (event) => {
    setPosId(parseInt(event.target.value));
  };

  // Get token
  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then((res) => res.json())
      .then((data) => setToken(data.token));
  }, []);

  // Get positions
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get(
          'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
        );
        setPositions(response.data.positions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPositions();
  }, []);

  return (
    <div className="form-block" id="form">
      {!isSuccess && (
        <>
          <h2 className="users-title">Working with POST request</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <div className="form-input">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="name">Your name</label>
              </div>

              <div className="form-input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-input">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="phone">Phone</label>
                <span>{`+38 (XXX) XXX - XX - XX`}</span>
              </div>
            </div>

            <div className="form-position">
              <fieldset>
                <legend>Select your position</legend>
                {positions &&
                  positions.map((item) => (
                    <div key={item.id}>
                      <label className="radio-container">
                        <input
                          type="radio"
                          name="position_id"
                          id="position_id"
                          defaultChecked={item.id === 1}
                          required
                          value={item.id}
                          onChange={handlePosId}
                        />
                        <span className="checkmark"></span>
                        {item.name}
                      </label>
                    </div>
                  ))}
              </fieldset>
            </div>

            <input
              type="file"
              name="photo"
              id="photo"
              placeholder="Upload your photo"
              required
              onChange={handlePhoto}
            />

            <Button title="Sign up" disabled={!photo}></Button>
          </form>
        </>
      )}

      {isSuccess && (
        <>
          <h2 className="users-title">User successfully registered</h2>
          <img
            src="./success-image.svg"
            className="suc-img"
            alt="success image"
          />
        </>
      )}
    </div>
  );
};

export default Form;
