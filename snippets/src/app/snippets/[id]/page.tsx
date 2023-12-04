import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from "@/actions";

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

  const { id, title, code } = snippet;
  const deleteSnippetAction = actions.deleteSnippet.bind(null, id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="flex gap-4">
          <Link href={`/snippets/${id}/edit`} className="border p-2 rounded">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="border p-2 rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="border rounded p-3 bg-gray-200 border-gray-400">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default SnippetShowPage;
