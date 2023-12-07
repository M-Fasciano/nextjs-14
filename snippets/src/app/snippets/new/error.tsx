"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

function ErrorPage(props: ErrorPageProps) {
  const { error, reset } = props;
  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
