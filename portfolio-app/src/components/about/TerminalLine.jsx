function TerminalLine({ command, output }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-cyan-400">
        <span className="text-green-400">
          praveen@portfolio:~$
        </span>

        <span>{command}</span>
      </div>

      <p className="text-slate-300 mt-2 ml-6">
        {output}
      </p>
    </div>
  );
}

export default TerminalLine;