import { component$, useVisibleTask$ } from '@builder.io/qwik';
import kwesforms from 'kwesforms';

const initializeKwesforms = async () => {
  try {
    await new Promise((resolve, reject) => {
      kwesforms.init();
      resolve('Kwesforms initialized successfully');
    });
  } catch (error) {
    throw new Error(`Error initializing Kwesforms: ${error}`);
  }
};

const IndexForme = component$(() => {
  // const initializeKwesforms = $(async () => {
  //   try {
  //     await new Promise((resolve, reject) => {
  //       kwesforms.init();
  //       resolve('Kwesforms initialized successfully');
  //     });
  //   } catch (error) {
  //     throw new Error(`Error initializing Kwesforms: ${error}`);
  //   }
  // });

  useVisibleTask$(
    async () => {
      console.log('useVisibleTask');
      // kwesforms.init();
      try {
        await initializeKwesforms();
        console.log('Kwesforms initialized successfully');
      } catch (error) {
        console.error(error.message);
      }
    }
    // { strategy: 'document-ready' }
  );

  return (
    <form class='kwes-form' no-reload action='https://kwesforms.com/api/foreign/forms/1sp8Iy1rGETSLFGKqYVR'>
      <label for='name'>Your Name</label>
      <input type='text' id='name' autocomplete='off' name='name' rules='required|max:255' />

      <button type='submit'>Submit</button>
    </form>
  );
});

export default IndexForme;
