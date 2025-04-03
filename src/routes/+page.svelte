<script>
	import HeroProduct from '$lib/sections/HeroProduct.svelte';
	import TwoCol from '$lib/sections/TwoCol.svelte';
  import CallToAction from '$lib/sections/CallToAction.svelte';
  import VideoEmbed from '$lib/components/VideoEmbed.svelte';

  import OneCol from '$lib/sections/OneCol.svelte';
  import TextBlock from '$lib/components/TextBlock.svelte';
  import Buttons from '$lib/components/Buttons.svelte';
  import SocialProof from '$lib/components/SocialProof.svelte';

  import image from '$lib/images/bg.jpg?enhanced';

  import Card from '$lib/components/Card.svelte';

  import FaqAccordion from '$lib/components/FaqAccordion.svelte';
  const faqs = [
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase.' },
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase.' },
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase.' },
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' },
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase.' },
    { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase.' },
    { question: 'Do you ship internationally?', answer: 'Yes, we ship to most countries worldwide.' },
    { question: 'How do I track my order?', answer: 'You’ll get a tracking link via email after your order ships.' }
  ];
  
  // SEO props
  import SEO from '$lib/components/SEO.svelte';
    import SocialLinks from '$lib/components/SocialLinks.svelte';
	const title = 'My Page Title';
	const description = 'This is a great description for SEO.';
	const url = '';
  </script>

  <SEO {title} {description} {image} {url} />

  
  


  
  <HeroProduct
  backgroundImage="images/bg.jpg"
  textAlignment="center"
  badge="New"
  eyebrow="Your Tagline Here"
  heading="Welcome to the Institute"
  text="We’re redefining research for the Anthropocene"
  button1Text="Learn More"
  button1Link=""
  button2Text="Get Involved"
  button2Link=""
  textColor="light"
  primaryButtonText="Sign Up"
  primaryButtonLink="/contact"
  
  lineText="Maybe later"
  lineLink="/about"
/>




<OneCol>
  <TextBlock
    eyebrow="Welcome"
    heading="This is a one-column layout"
    text="You can add any content here — text, buttons, images, videos."
    centered={true}
  />

  <Buttons
    primaryText="Learn more"
    primaryLink="/about"
    secondaryText="Contact us"
    secondaryLink="/contact"
    centered={true}
  />


  <VideoEmbed
  src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="Never Gonna Give You Up"
  thumbnail=""
  aspectRatio="16:9"
  autoplay={true}
/>
</OneCol>





  <OneCol
  bgClass="bg3">
  <TextBlock
    eyebrow="Welcome"
    heading="This is a one-column layout"
    text="You can add any content here — text, buttons, images, videos."
    centered={true}
  />

  <Card
  title="Grow a Food Forest"
  description="Learn how to grow your own resilient food system using permaculture principles and perennial crops."
  image={image}
  alt="Lush green food forest with layered planting"
  link="/learn-more"
  ctaText="Start Growing"
  variant="basic"
  badge="New"
  tags={['Permaculture', 'Regenerative']}
  icon=""
  hoverEffect={false}
  clickable={false}
  aspectRatio="16/9"
/>
</OneCol>





<TwoCol
  bgClass="bg3"
  col1Width="col-4"
  col2Width="col-8"
  reverseMobile={false}
  reverseDesktop={false}
  >
  <div slot="left">
    <TextBlock
      eyebrow="You Have Questions"
      heading="We have answers"
      text="This layout now uses slots. That means full flexibility!"
      centered={false}
    />
  
    <Buttons
      lineLink="/about"
      lineText="More Info"
      centered={false}
    />
  </div>
  
  <div slot="right">
    <FaqAccordion {faqs} theme="light" />
  </div>
  </TwoCol>

  
<TwoCol
bgClass="bg2"
col1Width="col-6"
col2Width="col-6"
reverseMobile={false}
reverseDesktop={false}
>
<div slot="left">
  <TextBlock
    eyebrow="Eyebrow here"
    heading="Dynamic content layout"
    text="This layout now uses slots. That means full flexibility!"
    centered={false}
  />

  <Buttons
    primaryText="Get Started"
    primaryLink="/start"
    secondaryText="More Info"
    secondaryLink="/about"
    centered={false}
  />

  <SocialProof />
</div>

<div slot="right">
  <enhanced:img src={image} alt="Cool layout" loading="lazy" width="1000" height="400" />
</div>
</TwoCol>

<TwoCol
bgClass="bg1"
col1Width="col-4"
col2Width="col-8"
reverseMobile={false}
reverseDesktop={true}
>
<div slot="left">
  <TextBlock
    eyebrow="Eyebrow here"
    heading="Dynamic content layout"
    text="This layout now uses slots. That means full flexibility!"
    centered={false}
  />

  <Buttons
    primaryText="Get Started"
    primaryLink="/start"
    secondaryText="More Info"
    secondaryLink="/about"
    centered={false}
  />
</div>

<div slot="right">
  <VideoEmbed
  src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="Never Gonna Give You Up"
  thumbnail=""
  aspectRatio="16:9"
  autoplay={true}
/>
</div>
</TwoCol>

  
  

<CallToAction
  headline="Ready to start your journey?"
  text="Let’s build your future, one step at a time."
  primaryButtonText="Sign Up"
  primaryButtonLink="/contact"
  secondaryButtonText="Learn More"
  secondaryButtonLink="/about"
  lineText="Maybe later"
  lineLink="/"
  bg="bg1"
  useCard={true}
  centered={true}
/>