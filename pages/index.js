import { useCallback, useRef, useState } from "react";

export default function Landing() {
  const [isBusy, setIsBusy] = useState(false);
  const [newLink, setNewLink] = useState(null);
  const [isError, setIsError] = useState(false);
  const URLInputRef = useRef(null);
  const handleSubmit = useCallback(async function (e) {
    e.preventDefault();

    const targetURL = URLInputRef.current.value;

    setIsBusy(true);
    setNewLink(null);
    setIsError(false);

    try {
      const { data: newLink, error } = await (
        await fetch("/api/create", {
          method: "POST",
          body: JSON.stringify({
            url: targetURL,
          }),
        })
      ).json();

      if (error) {
        setIsError(true);
      } else {
        setNewLink(`${process.env.NEXT_PUBLIC_VERCEL_URL}/l/${newLink.id}`);
      }
    } catch (e) {
      console.log("Error: ", e);
      setIsError(true);
    }

    setIsBusy(false);
  }, []);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Link</label>
        <input
          ref={URLInputRef}
          id="url"
          type="url"
          placeholder="Eg. https://vaibhavacharya.github.io"
          required
        />
        <center>
          <button type="submit" disabled={isBusy}>
            Shorten
          </button>
        </center>
      </form>
      {(isError || newLink) && (
        <>
          <hr />
          <blockquote>
            {isError ? (
              "Error! Please try again."
            ) : (
              <>
                Your new link is ready.
                <br />
                <a href={newLink} target="_blank" rel="noreferrer">
                  {newLink}
                </a>
              </>
            )}
          </blockquote>
        </>
      )}
    </main>
  );
}
