interface CodeWindowProps {
  code: string;
  filename: string;
  annotations?: Array<{
    text: string;
    position: "top" | "bottom";
  }>;
}

export function CodeWindow({ code, filename, annotations }: CodeWindowProps) {
  return (
    <div className="relative">
      {annotations?.map((annotation, index) => (
        <div
          key={index}
          className={`absolute ${
            annotation.position === "top" ? "-top-12" : "-bottom-24"
          } left-0 right-0 text-white text-sm`}
        >
          {annotation.text}
        </div>
      ))}
      <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="px-4 py-3 flex items-center justify-between bg-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 px-2 py-0.5 rounded text-sm text-gray-400">
              {filename}
            </div>
          </div>
          <button className="text-sm text-gray-400 hover:text-white">
            Copy
          </button>
        </div>
        <div className="p-4">
          <pre className="text-sm font-mono">
            <code className="text-white">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
