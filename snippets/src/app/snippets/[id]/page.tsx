import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  const { title, code } = snippet;

  return (
    <div>
      <h3 className="font-bold m-3">{title}</h3>
      <pre className="border rounded p-2">{code}</pre>
    </div>
  );
}

export default SnippetShowPage;
