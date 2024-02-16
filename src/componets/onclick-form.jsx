import { component$, useSignal, $ } from '@builder.io/qwik';

const OnsubmitForm = component$(() => {
  const hasLoaded = useSignal(false);

  const handleClick = $(async () => {
    console.log('handleClick');
    const kwesforms = await import('kwesforms');
    await kwesforms.init();
    hasLoaded.value = true;
  });

  return (
    <form
      class='kwes-form'
      no-reload
      action='https://kwesforms.com/api/foreign/forms/1sp8Iy1rGETSLFGKqYVR'
      onClick$={handleClick}
    >
      <label for='name'>Your Name</label>
      <input type='text' id='name' autocomplete='off' name='name' rules='required|max:5' />

      <button type='submit' disabled={!hasLoaded.value}>
        Submit
      </button>
    </form>
  );
});

export default OnsubmitForm;
