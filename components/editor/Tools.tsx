import Header from "@editorjs/header";
import EditorjsList from '@editorjs/list';
import ImageTool from '@editorjs/image'
import LinkTool from '@editorjs/link';


export const EDITOR_JS_TOOLS = {
    header: Header,
    List: EditorjsList,
    image:  {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:8080/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:8080/fetchUrl', // Your endpoint that provides uploading by Url
        }
      }
    },
    linkTool: {
      class: LinkTool,
      config: {
        endpoint: 'http://localhost:8080/fetchUrl', // Your backend endpoint for url data fetching,
      }
    }
}