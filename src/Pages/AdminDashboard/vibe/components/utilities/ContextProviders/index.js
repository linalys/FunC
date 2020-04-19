import React from 'react';
import { PageLoaderProvider } from '../../PageLoader/PageLoaderContext';

export default function ContextProviders({ children }) {
  return (
    <PageLoaderProvider>
      {children}
    </PageLoaderProvider>
  );
}
