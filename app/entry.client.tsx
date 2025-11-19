import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { getClarityScript } from '~/lib/analytics';

startTransition(() => {
  const clarityId = 'your_id_here';

  const script = document.createElement('script');
  script.innerHTML = getClarityScript(clarityId);
  document.head.appendChild(script);

  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
