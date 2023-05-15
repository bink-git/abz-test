import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Button from '../Button/Button';

import { CustomContext } from '../../hooks/Context';
import { useForm, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';

import NameInput from './NameInput';
import EmailInput from './EmailInput';
import PhoneInput from './PhoneInput';
import PositionsInput from './PositionsInput';
import FileInput from './FileInput';

const FormMui = () => {
  const [token, setToken] = useState('');

  const { isSuccess, setIsSuccess, isActive } = useContext(CustomContext);

  // Get token
  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then((res) => res.json())
      .then((data) => setToken(data.token));
  }, []);

  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      position_id: 1,
      phone: '',
      photo: null,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    let formData = new FormData();

    const { name, email, position_id, phone, photo } = data;

    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position_id', position_id);
    formData.append('photo', photo[0]);

    await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      {
        method: 'POST',
        body: formData,
        headers: { Token: token },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((dataObj) => {
        return dataObj.success;
      })
      .catch((error) => console.log(error));

    setIsSuccess(true);

    setTimeout(() => {
      methods.reset();
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <FormProvider {...methods}>
      <div className="form-block">
        {!isSuccess && (
          <>
            <h2 className="users-title">Working with POST request</h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <form
                id="form"
                onSubmit={methods.handleSubmit(onSubmit)}
                style={{
                  maxWidth: '380px',
                  width: '100%',
                  marginTop: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '50px',
                }}
              >
                <NameInput />
                <EmailInput />
                <PhoneInput />
                <PositionsInput />
                <FileInput />

                <Button
                  type="submit"
                  title="Sign up"
                  disabled={!isActive}
                ></Button>
              </form>
            </div>
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
    </FormProvider>
  );
};

export default FormMui;
