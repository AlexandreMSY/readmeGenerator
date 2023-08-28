import MarkdownEditor from "@uiw/react-markdown-editor";
import DownloadIcon from "@mui/icons-material/Download";
//className="hidden w-[80%] p-6 overflow-auto bg-[#121212] rounded-lg lg:inline-block"
const MarkdownViewer = (props) => {
  const { source } = props;

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([source], { type: "text/md;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <div className="rounded-lg overflow-auto bg-[#121212] w-[100%] rounded-lg">
        <div className="flex border border-slate-900 rounded-tl-lg rounded-tr-lg justify-center w-[100%] p-4 bg-black">
          <button onClick={downloadTxtFile}>
            <DownloadIcon /> Download
          </button>
        </div>
        <MarkdownEditor.Markdown source={source} className="p-2 mx-4 my-2" />
      </div>
    </>
  );
};

export default MarkdownViewer;
