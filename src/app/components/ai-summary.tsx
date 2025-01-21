export function AISummary({
  analyze,
}: {
  analyze: { summary: string; headline: string };
}) {
  return (
    <div className="bg-[#262626]/50 rounded-lg p-4">
      <h2 className="text-sm font-medium mb-2">AI Summary</h2>
      <p className="text-sm text-[#a3a3a3]">{analyze?.summary}</p>
    </div>
  );
}
