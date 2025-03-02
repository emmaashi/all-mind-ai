type CodeWindowProps = {
  code: string;
  filename: string;
  annotations?: Array<{
    text: string;
    position: string;
  }>;
};

export const CodeWindow = ({
  code,
  filename,
  annotations,
}: CodeWindowProps) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
      <div className="flex items-center px-2 md:px-4 py-1 md:py-2 bg-gray-800">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center">
          {filename.endsWith(".js") && (
            <div className="w-5 h-5 rounded bg-yellow-500 flex items-center justify-center mr-2 text-xs font-bold text-black">
              JS
            </div>
          )}
          {filename.endsWith(".ts") && (
            <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center mr-2 text-xs font-bold text-white">
              TS
            </div>
          )}
          {filename.endsWith(".py") && (
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center mr-2 text-xs font-bold text-white"></div>
          )}
          <span className="text-gray-300 text-sm">{filename}</span>
        </div>
        <div className="ml-auto">
          <span className="text-gray-400 text-sm">Copy</span>
        </div>
      </div>
      <div className="p-2 md:p-4 bg-gray-900 text-gray-100 font-mono text-xs md:text-sm overflow-auto">
        <pre className="whitespace-pre-wrap">
          <code className="language-javascript">
            {code.split("\n").map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line
                  .replace(
                    /function|const|return|console\.log/g,
                    (match) => `<span class="text-pink-400">${match}</span>`,
                  )
                  .replace(/$$.*?$$/g, (match) =>
                    match.replace(
                      /(\w+)(:)(\s*\w+)/g,
                      '<span class="text-blue-400">$1</span>$2<span class="text-green-400">$3</span>',
                    ),
                  )
                  .replace(
                    /('.*?')/g,
                    (match) => `<span class="text-amber-300">${match}</span>`,
                  )
                  .replace(
                    /(\+)/g,
                    (match) => `<span class="text-purple-300">${match}</span>`,
                  )
                  .replace(
                    /(>>>)/g,
                    (match) => `<span class="text-blue-300">${match}</span>`,
                  )
                  .replace(
                    /(True|False)/g,
                    (match) => `<span class="text-yellow-300">${match}</span>`,
                  )}
              </div>
            ))}
          </code>
        </pre>
      </div>
      {annotations &&
        annotations.map((annotation, index) => (
          <div
            key={index}
            className={`p-3 bg-gray-800 text-sm text-gray-300 ${annotation.position === "bottom" ? "border-t border-gray-700" : "border-b border-gray-700"}`}
          >
            {annotation.text}
          </div>
        ))}
    </div>
  );
};
