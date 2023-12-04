import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        <h3 className="font-bold m-3">{snippet.title}</h3>
        <pre className="border rounded p-2">{snippet.code}</pre>
      </div>
    );
  });

  return (
    <div>
      <h1 className="font-bold text-2xl m-3">Snippets</h1>
      {renderedSnippets}
    </div>
  );
}
