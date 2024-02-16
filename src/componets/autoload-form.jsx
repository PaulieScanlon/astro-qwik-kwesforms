import { component$, useVisibleTask$ } from '@builder.io/qwik';

const AutoloadForm = component$(() => {
  useVisibleTask$(async () => {
    console.log('useVisibleTask');
    const kwesforms = await import('kwesforms');
    await kwesforms.init();
  });

  return (
    <form class='kwes-form' no-reload action='https://kwesforms.com/api/foreign/forms/1sp8Iy1rGETSLFGKqYVR'>
      <label for='name'>Your Name</label>
      <input type='text' name='name' rules='required|max:255' />

      <button type='submit'>Submit</button>
    </form>
  );
});

export default AutoloadForm;
