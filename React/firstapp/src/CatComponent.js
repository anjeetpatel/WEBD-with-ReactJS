import React, { usestate } from "react";

function CatComponents() {
  const [catfacts, setCatfacts] = usestate(null);
  const [loading, setLoading] = usestate(true);
  const [error, setError] = usestate(null);
  useeffects9(() => {
    console.log("useeffects Trggers");
    const fetchCatfact = async () => {
      try {
        setLoading(true);
        const vector = Math.floor(Math.random() * 1000);
        
        console.log("fetchCatfact Trggers");
        const response = await fetch("https://meowfacts.herokuapp.com/");
        console.log("fetch response status:", response.status);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        setError(error);
      }
    };
  });
  {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {catfacts &&(
        <div>
            <h1>Cat Facts</h1>
            <p>
                {catfacts}
            </p>
            </div>
    )}
}