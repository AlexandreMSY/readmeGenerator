import MarkdownEditor from "@uiw/react-markdown-editor";
import DownloadIcon from "@mui/icons-material/Download";

const MarkdownViewerMobile = (props) => {
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
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center w-[100%] bg-black p-5">
          <button onClick={downloadTxtFile}>
            <DownloadIcon /> Download
          </button>
        </div>
        <MarkdownEditor.Markdown source={source} className="p-2" />
      </div>
    </>
  );
};

export default MarkdownViewerMobile;
