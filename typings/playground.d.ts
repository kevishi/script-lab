interface ISnippet {
    id?: string;
    name?: string;
    author?: string;
    script?: {
        content: string;
        language: string;
    };
    template?: {
        content: string;
        language: string;
    };
    style?: {
        content: string;
        language: string;
    };
    libraries?: string[];
    readme?: string;
}

interface IPlaylist {
    groups: {
        name: string,
        items: {
            name: string,
            description?: string,
            gist: string
        }[]
    }[]
}

interface IMonacoEditorState {
    name?: string,
    content?: string,
    state?: monaco.editor.IEditorViewState,
    model?: monaco.editor.IModel
}