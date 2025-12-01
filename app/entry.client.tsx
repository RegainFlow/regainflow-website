import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { getClarityScript, getApolloScript } from '~/lib/analytics';
import { siteConfig } from '~/config/site.config';

startTransition(() => {
  // Initialize Microsoft Clarity
  const clarityScript = document.createElement('script');
  clarityScript.innerHTML = getClarityScript(siteConfig.clarity.id);
  document.head.appendChild(clarityScript);

  // Initialize Apollo.io tracking
  const apolloScript = document.createElement('script');
  apolloScript.innerHTML = getApolloScript('685ed0bcf661750021862ff4');
  document.head.appendChild(apolloScript);

  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
