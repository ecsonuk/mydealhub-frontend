import Link from "next/link";

type PaginationProps = {
  page: number;
  totalPages: number;
  baseUrl: string;
  queryString?: string;
};

export default function Pagination({
  page,
  totalPages,
  baseUrl,
  queryString = "",
}: PaginationProps) {

  const startPage = Math.max(
    1,
    page - 5,
  );

  const endPage = Math.min(
    totalPages,
    page + 5,
  );

  const qs = queryString
    ? `&${queryString}`
    : "";

  return (
    <div
      className="
        flex
        justify-center
        items-center
        gap-2
        mt-12
        flex-wrap
      "
    >

      {page > 1 && (
        <>
          <Link
            href={`${baseUrl}?page=1${qs}`}
            className="
              px-5 py-2.5
              rounded-xl
              bg-white
              border border-slate-200
              shadow-sm
              hover:border-indigo-300
            "
          >
            First
          </Link>

          <Link
            href={`${baseUrl}?page=${page - 1}${qs}`}
            className="
              px-5 py-2.5
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              text-white
              font-medium
            "
          >
            Previous
          </Link>
        </>
      )}

      {Array.from(
        {
          length:
            endPage - startPage + 1,
        },
        (_, i) => startPage + i,
      ).map((p) => (
        <Link
          key={p}
          href={`${baseUrl}?page=${p}${qs}`}
          className={
            p === page
              ? "px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg"
              : "px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:text-indigo-600"
          }
        >
          {p}
        </Link>
      ))}

      {page < totalPages && (
        <>
          <Link
            href={`${baseUrl}?page=${page + 1}${qs}`}
            className="
              px-5 py-2.5
              rounded-xl
              bg-white
              border border-slate-200
              shadow-sm
              hover:border-indigo-300
            "
          >
            Next
          </Link>

          <Link
            href={`${baseUrl}?page=${totalPages}${qs}`}
            className="
              px-5 py-2.5
              rounded-xl
              bg-white
              border border-slate-200
              shadow-sm
              hover:border-indigo-300
            "
          >
            Last
          </Link>
        </>
      )}

    </div>
  );
}
