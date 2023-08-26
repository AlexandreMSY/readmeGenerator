import MarkdownEditor from "@uiw/react-markdown-editor";
//className="hidden w-[80%] p-6 overflow-auto bg-[#121212] rounded-lg lg:inline-block"
const MarkdownViewer = (props) => {
  const { source } = props;
  return (
    <div className="hidden overflow-auto bg-[#121212] w-[100%] rounded-lg lg:inline-block">
      <div className="w-[100%] p-4 bg-black">Download</div>
      <MarkdownEditor.Markdown source={source} className="p-2 mx-4 my-2" />
    </div>
  );
};

export default MarkdownViewer;
