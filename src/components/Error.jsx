import React from 'react';
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>{error.statusText} {error.status}</h1>
      <h3>{error.message}</h3>
    </div>
  )
}
