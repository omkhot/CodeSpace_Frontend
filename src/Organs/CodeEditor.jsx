import { useContext, useEffect } from "react";
import { Editor, useMonaco } from "@monaco-editor/react";
import { ThemeContext } from "../Contexts/ThemeContext";
import ActionPanel from "../Molecules/ActionPanel";
import useCodeActions from "../Hooks/CodeActionsHook";
import EditorContext from "../Contexts/EditorContext";

function CodeEditor() {
  const { theme } = useContext(ThemeContext);
  const monaco = useMonaco();

  const { setSelectedCode, selectedCode} = useCodeActions();

  const { editorState } = useContext(EditorContext);

  useEffect(() => {
    if (monaco) {
      monaco.editor.setTheme(theme === "dark" ? "vs-dark" : "vs");
    }
  }, [monaco, theme]);

  return (
    <div
      className="flex flex-col h-[85vh] border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-[#1e1e1e] shadow-md"
    >
      {selectedCode === "" && (
        <div className="absolute z-10 top-20 left-20 p-2">
          <p className="text-green-800 dark:text-green-400 italic">You can change the editor settings from profile tab. (Only for logged in users)</p>
        </div>
      )}
      <div className="flex-1">
        <Editor          
          value={selectedCode}
          theme={theme === "dark" ? "vs-dark" : "vs"}
          language={editorState.language}

          options={{
            fontSize: editorState.fontSize,
            fontFamily: editorState.fontFamily,
            fontWeight: editorState.fontWeight,
            automaticLayout: editorState.automaticLayout,
            minimap: { enabled: false },
          }}       
          
          onChange={(value) => {
            setSelectedCode(value)}
          }
        />
      </div>

      <div className="p-2 border-t border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-[#252526]">
        <ActionPanel />
      </div>
    </div>
  );
}

export default CodeEditor;
