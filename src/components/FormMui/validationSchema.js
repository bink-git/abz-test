import * as yup from 'yup';

const FILE_SIZE = 5000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('⚠ Name is reqired')
    .min(2, 'Username should contain 2-60 characters')
    .max(60, 'Username should contain 2-60 characters'),

  email: yup
    .string()
    .matches(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      {
        message: 'User email, must be a valid email according to RFC2822',
        excludeEmptyString: true,
      }
    )
    .required('⚠ Email is reqired')
    .email('User email, must be a valid email according to RFC2822')
    .min(2, 'minLength: 2 characters')
    .max(100, 'maxLength: 100 characters'),

  phone: yup
    .string()
    .max(13, 'maxLength: 13 characters')
    .matches(/^[\+]{0,1}380([0-9]{9})$/, {
      message: 'Number should start with code of Ukraine +380',
      excludeEmptyString: true,
    })

    .required('⚠ User phone number is reqired'),

  position_id: yup.number().required('⚠ Position is reqired'),

  photo: yup
    .mixed()
    .required('⚠ File is reqired')
    .test('fileSize', 'Minimum size of photo 70x70px', (value) => {
      if (!value) return false; // If no image is selected, consider it valid

      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (event) {
          const img = new Image();
          img.onload = function () {
            const { width, height } = img;
            // Define your desired width and height constraints here
            if (width < 70 || height < 70) {
              resolve(false); // Image dimensions not valid
            } else {
              resolve(true); // Image dimensions valid
            }
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(value[0]);
      });
    })
    .test(
      'type',
      'The photo format must be jpeg/jpg type',
      (value) => value && SUPPORTED_FORMATS.includes(value[0].type)
    )
    .test(
      'fileSize',
      'The photo size must not be greater than 5 Mb',
      (value) => value && value[0].size <= FILE_SIZE
    ),
});
