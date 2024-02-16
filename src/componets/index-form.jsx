import { component$, useVisibleTask$ } from '@builder.io/qwik';
import kwesforms from 'kwesforms';

const IndexForme = component$(() => {
  useVisibleTask$(() => {
    console.log('useVisibleTask');
    kwesforms.init();
  });

  return (
    <form class='kwes-form' no-reload action='https://kwesforms.com/api/foreign/forms/1sp8Iy1rGETSLFGKqYVR'>
      <label for='name'>Your Name</label>
      <input type='text' name='name' rules='required|max:255' />

      <button type='submit'>Submit</button>
    </form>
  );
});

export default IndexForme;
