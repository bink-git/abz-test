import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormContext, Controller } from 'react-hook-form';
import { Radio, RadioGroup, FormLabel, FormControlLabel } from '@mui/material';

const PositionsInput = () => {
  const [positions, setPositions] = useState('');
  const [posId, setPosId] = useState(1);

  const handlePosId = (event) => {
    setPosId(parseInt(event.target.value));
  };

  // Get positions
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get(
          'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
        );

        setPositions(response.data.positions);
        setPosId(parseInt(response.data.positions[0].id));
      } catch (error) {
        console.error(error);
      }
    };

    fetchPositions();
  }, []);

  const { control } = useFormContext();

  return (
    <>
      {/* <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Lawyer"
            name="radio"
            value={value}
            onChange={handleChange}
          >
            {positions &&
              positions.map((position) => (
                <FormControlLabel
                  key={position.id}
                  value={position.name}
                  control={<Radio />}
                  label={position.name}
                />
              ))}
          </RadioGroup>
        </FormControl> */}

      <Controller
        control={control}
        name="position_id"
        rules={{ required: true }}
        render={({ field }) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'flex-start',
            }}
          >
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{
                fontFamily: ['Nunito', 'sans-serif'].join(','),
                fontSize: '16px',
                color: 'rgba(0, 0, 0, 0.87)',
                marginBottom: '6px',
              }}
            >
              Select your position
            </FormLabel>
            {positions && (
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                {...field}
              >
                {positions.map((position) => (
                  <FormControlLabel
                    key={position.id}
                    label={position.name}
                    control={
                      <Radio
                        value={parseInt(position.id)}
                        onChange={handlePosId}
                        sx={{
                          color: '#D0CFCF',
                          '&.Mui-checked': {
                            color: '#00BDD3',
                          },
                          padding: '4px 10px',
                        }}
                      />
                    }
                  />
                ))}
              </RadioGroup>
            )}
          </div>
        )}
      />
    </>
  );
};

export default PositionsInput;
