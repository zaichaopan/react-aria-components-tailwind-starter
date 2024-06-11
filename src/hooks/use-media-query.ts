import React from 'react';

export function useMediaQuery(query: string) {
  const [subscribe, getSnapShot] = React.useMemo(() => {
    const media = window.matchMedia(query);

    function subscribe(onStoreChange: () => void) {
      media.addEventListener('change', onStoreChange);

      return () => {
        media.removeEventListener('change', onStoreChange);
      };
    }

    function getSnapShot() {
      return media.matches;
    }

    return [subscribe, getSnapShot];
  }, [query]);

  return React.useSyncExternalStore(subscribe, getSnapShot);
}
