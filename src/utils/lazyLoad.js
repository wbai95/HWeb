import React, { lazy, Suspense } from 'react';
import PageLoading from "../components/PageLoading";


export const loadableComp = (LazyComponent) =>
    () => React.createElement(
      Suspense,
      { fallback: React.createElement(PageLoading, null) },
      React.createElement(LazyComponent, null)
    );

export const lazyLoad = (fn) => loadableComp(lazy(fn));