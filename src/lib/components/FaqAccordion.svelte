<script lang="ts">
    import { slide } from 'svelte/transition';
  
    export let faqs: { question: string; answer: string }[] = [];
    export let theme: 'light' | 'dark' = 'light'; // default to light theme
  
    let openIndex: number | null = null;
  
    const toggle = (index: number) => {
      openIndex = openIndex === index ? null : index;
    };
  </script>
  
  <style>
    .faq-item {
      margin-bottom: 1rem;
      padding: 10px 24px 10px 10px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      transition: background-color 0.3s;
      border: var(--main-border-grey);
      cursor: pointer;
    }
  
    .light-theme {
      background-color: var(--light);
    }
  
    .light-theme:hover {
      background-color: var(--grey-200);
    }
  
    .dark-theme {
      background-color: var(--dark);
    }
  
    .dark-theme:hover {
      background-color: var(--grey-900);
    }
  
    .faq-question {
      font-size: var(--text-md);
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: none;
      border: none;
      width: 100%;
      padding: 0.5rem 0;
      text-align: left;
      pointer-events: none;
    }
  
    .light-text {
      color: var(--dark);
    }
  
    .dark-text {
      color: var(--light);
    }
  
    .faq-question:focus {
      box-shadow: none;
    }
  
    .icon {
      display: inline-block;
      transition: transform 0.3s var(--cubic), color 0.2s ease;
      font-weight: bold;
      font-size: var(--text-md);
      pointer-events: none;
    }
  
    .rotate {
      transform: rotate(45deg);
    }

    .dark-theme .faq-answer {
        color: var(--light);
    }

    .light-theme .faq-answer {
        color: var(--dark);
    }
  
    .faq-answer {
      opacity: 0.7;
      font-size: var(--text-sm);
      line-height: var(--body-line-height);
      margin-top: 0.5rem;
      padding-right: 0.5rem;
      padding-left: 10px;
      margin-bottom: 10px;
    }
  </style>
  
  <div>
    {#each faqs as faq, index}
      <div
        class="faq-item"
        class:light-theme={theme === 'light'}
        class:dark-theme={theme === 'dark'}
        on:click={() => toggle(index)}
        aria-expanded={openIndex === index}
      >
        <button class="faq-question" class:light-text={theme === 'light'} class:dark-text={theme === 'dark'}>
          <span>{faq.question}</span>
          <span class="icon" class:rotate={openIndex === index} class:light-text={theme === 'light'} class:dark-text={theme === 'dark'}>+</span>
        </button>
  
        {#if openIndex === index}
          <div class="faq-answer" transition:slide>
            {faq.answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>
  