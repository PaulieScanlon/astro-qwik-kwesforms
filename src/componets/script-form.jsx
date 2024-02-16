import { component$ } from '@builder.io/qwik';

const ScriptForm = component$(() => {
  return (
    <form class='kwes-form' no-reload action='https://kwesforms.com/api/foreign/forms/1sp8Iy1rGETSLFGKqYVR'>
      <label for='name'>Your Name</label>
      <input type='text' id='name' autocomplete='off' name='name' rules='required|max:255' />

      <button type='submit'>Submit</button>
    </form>
  );
});

export default ScriptForm;
