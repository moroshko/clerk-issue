"use client";

import cx from "clsx";

const RootErrorPage = ({ error }: { error: Error & { digest?: string } }) => {
  let errorObj = null;

  try {
    errorObj = JSON.parse(error.message);
  } catch {}

  const errorMessage =
    errorObj === null ? error.message : JSON.stringify(errorObj, null, 2);

  return (
    <div className="mx-auto max-w-lg space-y-4 px-4 text-center">
      <h1 className="flex items-center justify-center gap-1.5">
        <span className="text-xl font-semibold">Something went wrong</span>
      </h1>
      <p>We’re working on fixing this issue. Please try again later.</p>
      <pre
        className={cx(
          "whitespace-pre-wrap text-error",
          errorObj !== null && "text-left"
        )}
      >
        {errorMessage}
      </pre>
    </div>
  );
};

export default RootErrorPage;
