<script lang="ts">
    export let action: string;
    export let heading: string = "Join our newsletter";
    export let description: string = "Get updates delivered straight to your inbox.";
    export let emailLabel: string = "Email";
    export let nameLabel: string = "Name";
    export let buttonText: string = "Subscribe";
    export let successMessage: string = "Thanks for subscribing!";
    export let errorMessage: string = "Something went wrong. Please try again.";
    export let showNameField: boolean = false;
  
    let email = "";
    let name = "";
    let status: 'idle' | 'success' | 'error' | 'loading' = 'idle';
    let message = "";
  
    async function handleSubmit(event: Event) {
      event.preventDefault();
      status = 'loading';
  
      const formData = new FormData();
      formData.append('email', email);
      if (showNameField && name) formData.append('name', name);
  
      try {
        const res = await fetch(action, {
          method: 'POST',
          body: formData
        });
  
        if (res.ok) {
          email = "";
          name = "";
          status = 'success';
          message = successMessage;
        } else {
          status = 'error';
          message = errorMessage;
        }
      } catch (err) {
        status = 'error';
        message = errorMessage;
      }
    }
  </script>
  
<div class="newsletter-container">
    <h3>{heading}</h3>
    <p>{description}</p>
  
    <form on:submit={handleSubmit}>
      {#if showNameField}
        <label>
          {nameLabel}
          <input type="text" bind:value={name} name="name" />
        </label>
      {/if}
  
      <label>
        {emailLabel}
        <input type="email" bind:value={email} name="email" required />
      </label>
  
      <button type="submit" disabled={status === 'loading'}>
        {#if status === 'loading'}
          Sending...
        {:else}
          {buttonText}
        {/if}
      </button>
  
      {#if status === 'success' || status === 'error'}
        <p class={status}>{message}</p>
      {/if}
    </form>
</div>

  
  <style>
  
  form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
   
  
    .success {
      color: var(--success);
    }
  
    .error {
      color: var(--danger);
    }
  </style>
  