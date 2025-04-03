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
        <div class="form-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            bind:value={name}
            required
          />
          <label for="name">{nameLabel}</label>
        </div>
      {/if}
    
      <div class="form-group">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          bind:value={email}
          required
        />
        <label for="email">{emailLabel}</label>
      </div>
    
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
  
   
  
    .success {
      color: var(--success);
    }
  
    .error {
      color: var(--danger);
    }
  </style>
  