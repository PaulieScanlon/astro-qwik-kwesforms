import { component$, $ } from '@builder.io/qwik';

const OnsubmitForm = component$(() => {
  const handleSubmit = $(async () => {
    console.log('handleSubmit');
    const kwesforms = await import('kwesforms');
    await kwesforms.init();
  });

  return (
    <form
      class='kwes-form'
      no-reload
      action='https://kwesforms.com/api/foreign/forms/1sp8Iy1rGETSLFGKqYVR'
      onSubmit$={handleSubmit}
    >
      <label for='name'>Your Name</label>
      <input type='text' name='name' rules='required|max:255' />

      <button type='submit'>Submit</button>
    </form>
  );
});

export default OnsubmitForm;
